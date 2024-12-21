import jwt from "jsonwebtoken";
import { User } from "../models/user.model";

export const generateToken = (res, req) => {
  const token = jwt.sign({ userid: user._id }, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });
  return res
    .status(200)
    .cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    }).json({
        success:true,
        message,
        User
    });
};
