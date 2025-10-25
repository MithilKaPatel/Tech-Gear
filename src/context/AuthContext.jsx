import { createContext, useState, useEffect } from 'react';
import supabase from '/src/lib/supabase.js';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) {
          loadUser(session.user.id);
        } else {
          setUser(null);
          setIsAuthenticated(false);
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  // Check active session when app loads
  const checkUser = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();

      if (session?.user) {
        await loadUser(session.user.id);
      }
    } catch (error) {
      console.error('Error checking user:', error);
    } finally {
      setLoading(false);
    }
  };

  // Load user profile from "profiles" table
  const loadUser = async (userId) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();

      if (error) throw error;

      if (data) {
        setUser(data);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Error loading user:', error);
    }
  };

  // Login
  const login = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;

      if (data.user) {
        await loadUser(data.user.id);
        return { success: true };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  // Register (Auth + Profiles)
  const register = async ({ full_name, email, password, phone }) => {
    try {
      // 1️⃣ Create user in Supabase Auth
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name, phone } // store as user_metadata
        }
      });

      if (error) throw error;

      // 2️⃣ Insert profile row
      if (data.user) {
        const { error: profileError } = await supabase.from('profiles').insert({
          id: data.user.id,
          full_name,                  // matches DB column
          email,
          phone,
          avatar_url: `https://ui-avatars.com/api/?name=${encodeURIComponent(full_name)}`
        });

        if (profileError) throw profileError;

        await loadUser(data.user.id);
        return { success: true };
      }

      return { success: false, error: 'User creation failed' };
    } catch (error) {
      console.error('Registration Error:', error);
      return { success: false, error: error.message };
    }
  };

  // Logout
  const logout = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        login,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
