// src/context/AuthContext.jsx
import React, { createContext, useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    // Initialize session & user
    (async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) throw error;
        if (mounted) {
          setSession(data.session ?? null);
          setUser(data.session?.user ?? null);
          setLoading(false);
        }
      } catch (err) {
        console.error("Auth init error:", err);
        if (mounted) setLoading(false);
      }
    })();

    // Subscribe to auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
      setUser(newSession?.user ?? null);
    });

    return () => {
      mounted = false;
      if (subscription && typeof subscription.unsubscribe === "function") {
        subscription.unsubscribe();
      }
    };
  }, []);

  /**
   * register - called by your RegisterModal
   * Accepts an object with fields: { name, email, password, confirmPassword, phone }
   * Returns: { success: boolean, error?: string, data?: any }
   */
  const register = async ({ name, email, password, phone }) => {
    try {
      // Create auth user and pass metadata so trigger can pick it up
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: name ?? null, phone: phone ?? null } // raw_user_meta_data
        }
      });

      if (error) {
        // Known Supabase error
        return { success: false, error: error.message || String(error) };
      }

      // At this point:
      // - If your DB trigger exists, it will create a profiles row (server-side).
      // - If you want to ensure a profile exists client-side immediately, upsert profile here (safe).
      // We will attempt an upsert to ensure profile exists if trigger was not created or takes time.
      const userId = data.user?.id ?? null;
      if (userId) {
        // Upsert profile WITHOUT email (email is in auth.users)
        const { error: upsertErr } = await supabase
          .from("profiles")
          .upsert(
            { id: userId, full_name: name ?? null, phone: phone ?? null },
            { onConflict: "id" }
          );
        // ignore upsert errors that are benign (log them)
        if (upsertErr) {
          console.warn("Profile upsert warning:", upsertErr);
        }
      }

      return { success: true, data };
    } catch (err) {
      console.error("register error:", err);
      return { success: false, error: err?.message ?? String(err) };
    }
  };

  const signIn = async ({ email, password }) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      return { success: true, data };
    } catch (err) {
      return { success: false, error: err?.message ?? String(err) };
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setUser(null);
      setSession(null);
      return { success: true };
    } catch (err) {
      return { success: false, error: err?.message ?? String(err) };
    }
  };

  // update profile helper (updates profiles table columns)
  const updateProfile = async (profile) => {
    try {
      if (!user?.id) throw new Error("Not authenticated");
      const { data, error } = await supabase
        .from("profiles")
        .update(profile)
        .eq("id", user.id)
        .select()
        .single();
      if (error) throw error;
      return { success: true, data };
    } catch (err) {
      return { success: false, error: err?.message ?? String(err) };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        loading,
        register,
        signIn,
        signOut,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
