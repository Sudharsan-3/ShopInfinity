import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

dotenv.config();

const prisma = new PrismaClient();
const sercretKey = process.env.SECRETTOKEN;

export const Login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send(`You must send both email and password`);
  }
  console.log(sercretKey ,"from login se")

  try {
    const response = await prisma.user.findUnique({
      where: { email },
    });

    if (!response) {
      return res.status(404).json(`User not found with the email id: ${email}`);
    }

    const checkPassword = await bcrypt.compare(password, response.password);
    if (!checkPassword) {
      return res.status(401).send("Invalid password, try again");
    }

    const token = jwt.sign(
      {
        id: response.id,
        name: response.userName, 
        email: response.email,
        role: response.role,
      },
      sercretKey,
      { expiresIn: "24h" }
    );

    res.status(201).json({
      success: true,
      message: "User successfully logged in",
      user: {
        id: response.id,
        name: response.userName, 
        email: response.email,
        role: response.role,
        token,
      },
    });
  } catch (error) {
    console.log(`Error during login: ${error}`);
    res.status(500).json(error);
  }
};
