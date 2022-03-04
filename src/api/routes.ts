import express from "express";
import controller from "./controller/repo.controller";


const router = express.Router();

router.get('/repo/:username', controller.getUserReposByName);

export = router;
