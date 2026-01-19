import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    const savedUser = await newUser.save();
    console.log("資料庫回傳的完整物件:", savedUser);
    res.status(201).json("User created successfully!");
  } catch (error) {
    next(error);
  }
};
