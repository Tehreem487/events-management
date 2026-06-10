import User from "../models/User.js";
import bcrypt from "bcryptjs";

// REGISTER
export const registerUser = async (req, res) => {
  try {
    console.log("🔥 REGISTER HIT");
    console.log("BODY:", req.body);

    const { name, email, password } = req.body;

    // check empty fields
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    console.log("✅ USER SAVED:", user);

    return res.status(201).json({
      message: "User registered successfully",
      user,
    });

  } catch (err) {
    console.log("❌ REGISTER ERROR:", err);
    return res.status(500).json({ message: err.message });
  }
};console.log("🔥 REGISTER HIT");
console.log("BODY:", req.body);

const user = await User.create({
  name,
  email,
  password: hashedPassword,
});

console.log("✅ SAVED USER:", user);