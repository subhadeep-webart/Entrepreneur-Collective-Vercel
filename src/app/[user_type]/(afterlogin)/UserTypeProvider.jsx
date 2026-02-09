"use client";
import { createContext, useContext } from "react";

const UserTypeContext = createContext(null);

export const UserTypeProvider = ({ userType, children }) => {
  return (
    <UserTypeContext.Provider value={userType}>
      {children}
    </UserTypeContext.Provider>
  );
};

export const useUserType = () => useContext(UserTypeContext);
