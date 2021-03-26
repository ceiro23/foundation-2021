import React, { createContext, useContext, FC } from "react";
import { User, UserProperties } from "../user";
import { useUsers } from "./useUsers";

export interface UserService {
  findAll: () => Promise<User[]>;
  saveNew: (user: UserProperties) => Promise<User>;
}

export const UserContext = createContext<UserService>({} as UserService);

export const UserProvider: FC = (props) => {
  return (
    <UserContext.Provider value={useUsers()}>
      {props.children}
    </UserContext.Provider>
  );
};
export const useUserService = () => {
  return useContext(UserContext);
};
