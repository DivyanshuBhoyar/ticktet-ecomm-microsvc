import express from "express";

const router = express.Router();

// delete user object on the session ctx of req
router.post("/api/users/signout", (req, res) => {
  req.session = null;

  res.send({});
});

export { router as signoutRouter };
