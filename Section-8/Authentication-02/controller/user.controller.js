import { eq } from "drizzle-orm";
import db from "../db/index.js";
import { usersTable, userSessions } from "../db/schema.js";
import { randomBytes, createHmac } from "node:crypto";

export async function signUp(req, res) {
  const { name, email, password } = req.body;

  const existingUser = await db
    .select({
      email: usersTable.email, //Yahan tumne sirf email column select kiya, matlab baaki sab columns ignore ho jayenge.
      // Jab tum kuch bhi select() ke andar specify nahi karte, toh ORM (Drizzle) automatically table ke saare columns select kar leta hai.
    })
    .from(usersTable)
    .where((table) => eq(table.email, email));

  if (existingUser.length > 0) {
    return res.status(400).json({
      error: `User with email ${email} already exists`,
    });
  }

  const salt = randomBytes(256).toString("hex");
  const hashedPassword = createHmac("sha256", salt)
    .update(password)
    .digest("hex");

  const [user] = await db
    .insert(usersTable)
    .values({
      name,
      email,
      password: hashedPassword, // bss password bhejna is wrong step
      salt,
    })
    .returning({ id: usersTable.id });

  return res.status(201).json({ status: "success", data: { userId: user.id } });
}

export async function login(req, res) {
  const { email, password } = req.body;

  const [existingUser] = await db
    .select({
      id: usersTable.id,
      email: usersTable.email,
      salt: usersTable.salt,
      password: usersTable.password,
    })
    .from(usersTable)
    .where((table) => eq(table.email, email));

  if (!existingUser) {
    return res
      .status(404)
      .json({ error: `User with email ${email} doesnot exist` });
  }

  const salt = existingUser.salt;
  const existingHashPassword = existingUser.password;

  const newHash = createHmac("sha256", salt).update(password).digest("hex");
  if (newHash !== existingHashPassword) {
    return res.status(400).json({ error: "Incorrect password" });
  }

  // generate a session for user
  const [session] = await db
    .insert(userSessions)
    .values({
      userId: existingUser.id,
    })
    .returning({ id: userSessions.id });

  return res.json({ status: "Login successful", sessionId: session.id });
}
