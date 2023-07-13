import { IUser, UserType } from "@/interfaces/user";
import { User } from "../models/User";
import { connect } from "./db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Types } from "mongoose";

const secret = process.env.SECRET || "";
const expiresIn = "24h";

export async function getUser(userId: string) {
  await connect();
  const user = await User.findById(userId);
  return user;
}
export const createToken = (userId: Types.ObjectId, role: UserType) => {
  const token = jwt.sign({ userId, role }, secret, { expiresIn });
  return `${token}`;
};

export async function verifyToken(token: string): Promise<IUser | null> {
  try {
    const data = jwt.verify(token, secret);
    const userId = (data as { userId: string }).userId;
    if (!userId) return null;
    const user = await getUser(userId);
    return user;
  } catch (error) {
    console.log("verifyToken(): ", { error });
    return null;
  }
}

export async function verifyUser(userName: string, password: string) {
  await connect();
  const user = await User.findOne({ userName });
  if (!user) {
    return null;
  }
  const logged = await bcrypt.compare(password, user.password);
  if (!logged) {
    return null;
  }
  return user;
}

export async function createUser(user: IUser) {
  const { password } = user;
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(password, salt);
  await connect();
  const newUser = await User.create(user);
  await connect();
  return newUser;
}
