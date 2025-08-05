import mongoose, { Schema, models, model,Document } from "mongoose";
// import bcrypt from "bcryptjs"

export interface Iuser extends Document {
  name:string,
  email:string,
  password:string
}


const UserSchema = new Schema<Iuser>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Email is required'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
  },
  { timestamps: true }
);
export const User = models.User || model<Iuser>("User", UserSchema);




