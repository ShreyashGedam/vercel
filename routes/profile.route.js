const { Router } = require("express");
const { getProfile } = require("../controllers/profile.controller");

const profileRouter = Router();

profileRouter.get("/get", getProfile);

module.exports = profileRouter;
