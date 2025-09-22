import jwt from "jsonwebtoken";

export const authMiddleware = async function (req, res, next) {
  try {
    const tokenHeader = req.headers["authorization"];

    if (!tokenHeader) {
      return next();
    }

    if (!tokenHeader.startsWith("Bearer")) {
      return res
        .status(400)
        .json({ error: `Authorization header must begin with bearer` });
    }

    const token = tokenHeader.split(" ")[1];

    if (!token) {
      return res.status(400).json({ error: "There is no token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    return next();
  } catch (error) {
    console.log(`Decoding Token Failed`, error);

    next();
  }
};

export const ensureAuthenticated = async (req, res) => {
  if (!req.user) {
    return res.status(401).json({
      error: "You must be authenticated to access this",
    });
  }
  next();
};
