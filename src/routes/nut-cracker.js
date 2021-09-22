import express from "express";

import { getData, postData } from "../controllers/nut-cracker.js";

const router = express.Router();

// @GET
router.get("/", getData);

// @POST
router.post("/", postData);

export default router;

// Ship off to the index.js
