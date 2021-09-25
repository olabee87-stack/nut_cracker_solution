import express from "express";

import {
  getData,
  postResultOfBinaryTree,
  samplePost,
} from "../controllers/nut-cracker.js";

const router = express.Router();

// @GET
router.get("/", getData);

// @POST

router.post("/", postResultOfBinaryTree);
router.post("/sample", samplePost);

export default router;

// Ship off to the index.js
