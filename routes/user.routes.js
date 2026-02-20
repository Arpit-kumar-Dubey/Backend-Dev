import express from "express";
import {
  createUser,
  getUser,
  userUpdate,
  deleteUser
} from "../user.js";

import { validateUser } from "../middleware/validation.middleware.js";
import { checkFile, checkUserExists } from "../middleware/file.middleware.js";

const router = express.Router();

// SAME ROUTES — no change in API
router.post("/", validateUser, createUser);
router.get("/:id", checkFile, checkUserExists, getUser);
router.put("/:id", checkFile, checkUserExists, userUpdate);
router.delete("/:id", checkFile, checkUserExists, deleteUser);

export default router;