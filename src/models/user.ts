import mongoose, { model } from "mongoose";
import { IUserModel, IUser } from "../interfaces";

const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    max: 255,
    min: 3,
  },
  last_name: {
    type: String,
    required: true,
    max: 255,
    min: 3,
  },
  phone_number: {
    type: String,
    required: true,
    max: 255,
    min: 10,
  },
  location: {
    type: String,
    required: true,
    max: 255,
    min: 3,
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 3,
  },
});

export const User: any = model<any>("user", UserSchema);
