import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.json({ success: false, message: "Not authorized, login again" });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    if (tokenDecode?.id) {
      req.user = { id: tokenDecode.id }; // ✅ SAFE place to store user data
      next();
    } else {
      return res.json({
        success: false,
        message: "Not authorized, login again",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message }); // Optional: replace "BAASAL" with real error
  }
};

export default userAuth;
