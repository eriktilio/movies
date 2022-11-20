import express from "express";
import movieController from "../controller/movie.controller";

const moviesRouter = express.Router();

moviesRouter.get("/movies", movieController.getAll);
moviesRouter.get("/movies/:id", movieController.getOne);
moviesRouter.post("/movies", movieController.createOne);
moviesRouter.put("/movies/:id", movieController.updateOne);
moviesRouter.delete("/movies/:id", movieController.deleteOne);

export default moviesRouter;
