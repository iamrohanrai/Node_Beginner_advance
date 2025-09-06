import express from "express";

const app = express();
const PORT = 8000;

app.use(express.json());

// creating a session based authentication

const DIARY = {};
const EMAIL = new Set();

// let say Email = unique car number
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  if (EMAIL.has(email)) {
    return res.status(400).json({ error: `Email already taken` });
  }

  // create a token
  const token = `${Date.now()}`;

  // do a entry in diary
  DIARY[token] = { name, email, password };
  EMAIL.add(email);

  return res.json({ status: `Success`, token });
});

app.post("/me", function (req, res) {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ error: `Missing token` });
  }
  if (!(token in DIARY)) {
    return res.status(400).json({ error: `Invalid token` });
  }
  const entry = DIARY[token];
  return res.json({ data: entry });
});

app.post("/private-data", (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ error: `Missing token` });
  }
  if (!(token in DIARY)) {
    return res.status(400).json({ error: `Invalid token` });
  }

  const entry = DIARY[token];
  return res.json({ data: { privateData: `Access Granted` } });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
