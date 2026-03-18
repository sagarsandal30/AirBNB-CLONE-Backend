const path = require("path");
const express = require("express");

const hostRouter = express.Router();
const rootDir = require("../utils/pathUtil");
const {
  postHomeAdded,
  getAddHome,
  getHostHomes,
  getEditHome,
} = require("../Controllers/hostRouter");

hostRouter.get("/add-home", getAddHome);
hostRouter.post("/add-home", postHomeAdded);
hostRouter.get("/host-home-list", getHostHomes);
hostRouter.get("/edit-home/:homeId", getEditHome);
// hostRouter.post("/edit-home",postEditHome);
exports.hostRouter = hostRouter;
