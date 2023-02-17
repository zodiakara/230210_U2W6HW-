import express from "express";
import { JWTAuthMiddleware } from "../../libraries/auth/JWTtools.js";
import {
  adminOrHostMiddleware,
  hostOnlyMiddleware,
} from "../../libraries/auth/middlewares.js";
import AccommodationModel from "./model.js";

const accommodationRouter = express.Router();

accommodationRouter.post("/", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});
accommodationRouter.get("/", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});
accommodationRouter.get(
  "/me/:accommodationId",
  JWTAuthMiddleware,
  hostOnlyMiddleware,
  async (req, res, next) => {
    try {
    } catch (error) {
      next(error);
    }
  }
);
accommodationRouter.put(
  "/me/:accommodationId",
  JWTAuthMiddleware,
  hostOnlyMiddleware,
  async (req, res, next) => {
    try {
    } catch (error) {
      next(error);
    }
  }
);
accommodationRouter.delete(
  "/me/:accommodationId",
  JWTAuthMiddleware,
  adminOrHostMiddleware,
  async (req, res, next) => {
    try {
    } catch (error) {
      next(error);
    }
  }
);

export default accommodationRouter;
