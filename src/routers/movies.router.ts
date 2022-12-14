import express from "express";
import upload from "../multer";
import MovieController from "../controller/movie.controller";

const moviesRouter = express.Router();

moviesRouter.get("/movies", MovieController.getAll);
moviesRouter.get("/movies/:id", MovieController.getOne);
moviesRouter.post(
  "/movies",
  upload.single("urlPoster"),
  MovieController.createOne
);
moviesRouter.put("/movies/:id", MovieController.updateOne);
moviesRouter.delete("/movies/:id", MovieController.deleteOne);

export default moviesRouter;
