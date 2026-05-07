import {
  createContext,
  useEffect,
  useState,
} from "react";

import { type User } from "../types/auth";

interface AuthContextType {
  user: User | null;

  login: (userData: User) => void;

  logout: () => void;
}

export const AuthContext =
  createContext<AuthContextType | null>(
    null
  );

const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] =
    useState<User | null>(null);

  useEffect(() => {
    const storedUser =
      localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData: User) => {
    setUser(userData);

    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );

    localStorage.setItem(
      "token",
      userData.token
    );
  };

  const logout = () => {
    setUser(null);

    localStorage.removeItem("user");

    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;