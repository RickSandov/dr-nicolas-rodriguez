import { IUser, userType, userTypeArray } from "@/interfaces/user";
import { Model, Schema, model, models } from "mongoose";

const userSchema = new Schema<IUser>({
  userName: {
    type: String,
    required: true,
    index: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: userTypeArray,
    default: userType.employee,
  },
});

export const User: Model<IUser> = models.User || model("User", userSchema);

export default User;
