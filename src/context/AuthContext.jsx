// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    // initialize current session / user
    const init = async () => {
      try {
        const {
          data: { session: currentSession },
          error,
        } = await supabase.auth.getSession();

        if (error) throw error;

        if (mounted) {
          setSession(currentSession);
          setUser(currentSession?.user ?? null);
          setLoading(false);
        }
      } catch (err) {
        console.error("Auth init error:", err);
        if (mounted) {
          setLoading(false);
        }
      }
    };

    init();

    // subscribe to auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
      setUser(newSession?.user ?? null);
    });

    return () => {
      mounted = false;
      if (subscription) subscription.unsubscribe();
    };
  }, []);

  // signUp: create auth user; do NOT insert `email` into profiles.
  // If you want a profile row client-side (instead of trigger), we'll insert only id + metadata (no email).
  const signUp = async ({ email, password, full_name = null, avatar_url = null }) => {
    // sign up via supabase auth
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        // place metadata in raw_user_meta_data so the server trigger can read them:
        data: { full_name, avatar_url },
      },
    });
    if (error) throw error;

    // If your DB uses a trigger on auth.users to create profiles, you don't need to insert the profile here.
    // But if you want to ensure a profile exists immediately client-side (or your trigger isn't present),
    // insert profile with id = newly created user id (do NOT include email column unless your table has it).
    const userId = data.user?.id ?? null;
    if (userId) {
      try {
        // Try to create a profile only if it doesn't exist.
        await supabase
          .from("profiles")
          .upsert(
            { id: userId, full_name: full_name ?? null, avatar_url: avatar_url ?? null },
            { onConflict: "id", ignoreDuplicates: false }
          );
      } catch (err) {
        // If you're using the trigger, this may conflict — just log it.
        console.warn("Could not upsert profile (might be created by trigger):", err);
      }
    }

    return data;
  };

  // signIn with email & password
  const signIn = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
  };

  // signOut
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    setUser(null);
    setSession(null);
  };

  // helper: update profile fields in profiles table
  const updateProfile = async (profile) => {
    if (!user?.id) throw new Error("Not authenticated");
    const { data, error } = await supabase
      .from("profiles")
      .update(profile)
      .eq("id", user.id)
      .select()
      .single();
    if (error) throw error;
    return data;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        loading,
        signUp,
        signIn,
        signOut,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
