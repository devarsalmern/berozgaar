// src/Context/AuthContext.jsx

import { createContext, useState } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// Change AuthProvider to default export
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider; // Export as default
