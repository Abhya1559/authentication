import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not loaded");
}

export const generateToken = (payload: object): string => {
    return jwt.sign(payload,JWT_SECRET,{
        expiresIn:"7d"
    })
};
