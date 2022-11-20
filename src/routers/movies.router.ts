import express from "express";
import Movie from "../models/movie";
import movieController from "../controller/movie.controller";

const moviesRouter = express.Router();

moviesRouter.post("/movies", (req, res) => {
  const movie: Movie = req.body;
  movieController.createOne(movie, (id) => {
    if (id) {
      res.status(201).location(`/movies/${id}`).send();
    } else {
      res.status(400).send();
    }
  });
});

moviesRouter.get("/movies", (_req, res) => {
  movieController.getAll((movies) => res.json(movies));
});

moviesRouter.get("/movies/:id", (req, res) => {
  const id: number = +req.params.id;
  movieController.getOne(id, (movie) => {
    if (movie) {
      res.status(200).json(movie);
    } else {
      res.status(404).send();
    }
  });
});

moviesRouter.put("/movies/:id", (req, res) => {
  const id: number = +req.params.id;
  movieController.updateOne(id, req.body, (notFound) => {
    if (notFound) {
      res.status(404).send();
    } else {
      res.status(204).send();
    }
  });
});

moviesRouter.delete("/movies/:id", (req, res) => {
  const id: number = +req.params.id;
  movieController.deleteOne(id, (notFound) => {
    if (notFound) {
      res.status(404).send();
    } else {
      res.status(204).send();
    }
  });
});

export default moviesRouter;
