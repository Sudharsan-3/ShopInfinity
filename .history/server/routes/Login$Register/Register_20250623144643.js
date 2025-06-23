import { PrismaClient } from "@prisma/client";
import bcryptjs from "bcryptjs";

const prisma = new PrismaClient();

export const Register = async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).send(`You must provide name, email, password, and role`);
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(409).send(`Email ${email} is already in use. Try another.`);
    }

    const hashedPassword = await bcryptjs.hash(str password, 10);

    await prisma.user.create({
      data: {
        userName: name,
        email,
        password: hashedPassword,
        role,
      },
    });

    res.status(201).send(`Successfully registered user: ${name} with email: ${email}`);
  } catch (error) {
    res.status(500).send(`Error during registration: ${error.message}`);
  }
};
