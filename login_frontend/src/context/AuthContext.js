import React, { createContext, useContext, useMemo, useState } from "react";

/**
 * Simple client-only auth state for demo purposes.
 * In a real app, you'd integrate with backend OAuth redirects or SDKs.
 */

const AuthContext = createContext(null);

// PUBLIC_INTERFACE
export function useAuth() {
  /** Hook to access auth state and actions. */
  return useContext(AuthContext);
}

// PUBLIC_INTERFACE
export function AuthProvider({ children }) {
  /**
   * Provides auth state (user) and actions (login, logout).
   * This is a mock implementation for UI/flow showcasing.
   */
  const [user, setUser] = useState(null);

  const loginWithProvider = (provider) => {
    // Mock user profile after "OAuth" success. Replace with real integration.
    const mockUser = {
      name: "Jordan Waters",
      email: "jordan@example.com",
      avatarUrl: `https://api.dicebear.com/7.x/initials/svg?seed=Jordan%20Waters`,
      provider
    };
    setUser(mockUser);
  };

  const logout = () => setUser(null);

  const value = useMemo(() => ({ user, loginWithProvider, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
