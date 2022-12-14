import { Request, Response } from "express";
import Movie from "../models/movie";
import {
  createMovie,
  getAllMovies,
  getOneMovie,
  updateMovie,
  deleteOneMovie,
} from "../repositories/movie.repository";

const MovieController = {
  createOne: (req: Request, res: Response) => {
    const movie: Movie = req.body;
    movie.urlPoster = req.file?.path || "";
    console.log(movie);
    createMovie(movie, (id) => {
      if (id) {
        res.status(201).location(`/movies/${id}`).send();
      } else {
        res.status(400).send();
      }
    });
  },

  getAll: (_req: Request, res: Response) => {
    getAllMovies((movies) => res.json(movies));
  },

  getOne: (req: Request, res: Response) => {
    const id: number = +req.params.id;
    getOneMovie(id, (movie) => {
      if (movie) {
        res.status(200).json(movie);
      } else {
        res.status(404).send();
      }
    });
  },

  updateOne: (req: Request, res: Response) => {
    const id: number = +req.params.id;
    updateMovie(id, req.body, (notFound) => {
      if (notFound) {
        res.status(404).send();
      } else {
        res.status(204).send();
      }
    });
  },

  deleteOne: (req: Request, res: Response) => {
    const id: number = +req.params.id;
    deleteOneMovie(id, (notFound) => {
      if (notFound) {
        res.status(404).send();
      } else {
        res.status(204).send();
      }
    });
  },
};

export default MovieController;
