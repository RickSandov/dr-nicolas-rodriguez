import { ObjectValues } from ".";

export const userType = {
  admin: "admin",
  employee: "empleado",
} as const;

export const userTypeArray = Object.values(userType);

export type UserType = ObjectValues<typeof userType>;

export interface IShortUser {
  userName: string;
  displayName: string;
  role: UserType;
}

export interface IUser extends IShortUser {
  password: string;
}
