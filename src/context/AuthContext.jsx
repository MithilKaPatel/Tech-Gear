import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../lib/supabase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user and their profile info (from users table)
  const loadProfile = async (userId) => {
    try {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", userId)
        .single();

      if (error) throw error;
      setUser(data);
    } catch (error) {
      console.error("Error loading profile:", error.message);
    }
  };

  // Register new user (sign up + insert into users table)
  const register = async (userData) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: userData.email,
        password: userData.password,
      });

      if (error) throw error;

      const newUser = data.user;

      if (newUser) {
        // Insert the user record into your "users" table
        const { error: insertError } = await supabase
          .from("users")
          .insert({
            id: newUser.id,
            full_name: userData.full_name || "", // ✅ matches your DB column
            phone: userData.phone || "",
            avatar_url: `https://ui-avatars.com/api/?name=${encodeURIComponent(
              userData.full_name || "User"
            )}`,
          });

        if (insertError) throw insertError;

        // Load user data into context
        await loadProfile(newUser.id);
        return { success: true };
      }
    } catch (error) {
      console.error("Registration Error:", error.message);
      return { success: false, error: error.message };
    }
  };

  // Login existing user
  const login = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      if (data.user) {
        await loadProfile(data.user.id);
      }
      return { success: true };
    } catch (error) {
      console.error("Login Error:", error.message);
      return { success: false, error: error.message };
    }
  };

  // Logout user
  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  // Keep user session synced
  useEffect(() => {
    const fetchSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Session error:", error.message);
        setLoading(false);
        return;
      }

      const currentUser = data.session?.user;
      if (currentUser) {
        await loadProfile(currentUser.id);
      }
      setLoading(false);
    };

    fetchSession();

    // Listen to auth changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        loadProfile(session.user.id);
      } else {
        setUser(null);
      }
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, loading, register, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for consuming context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
