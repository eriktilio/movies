import Movie from "../models/movie";
import database from "../repositories/database";

const movieController = {
  createOne: (movie: Movie, callback: (id?: number) => void) => {
    const sql =
      "INSERT INTO movies(title, urlPoster, overview) VALUES (?, ?, ?)";
    const params = [movie.title, movie.urlPoster, movie.overview];
    database.run(sql, params, function () {
      callback(this?.lastID);
    });
  },

  getAll: (callback: (itens: Movie[]) => void) => {
    const sql = "SELECT * FROM movies";
    const params: unknown[] = [];
    database.all(sql, params, (_err, rows) => callback(rows));
  },

  getOne: (id: number, callback: (movie?: Movie) => void) => {
    const sql = "SELECT * FROM movies WHERE id = ?";
    const params = [id];
    database.get(sql, params, (_err, row) => callback(row));
  },

  updateOne: (
    id: number,
    movie: Movie,
    callback: (notFound: boolean) => void
  ) => {
    const sql =
      "UPDATE movies SET title = ?, urlPoster = ?, overview = ? WHERE id = ?";
    const params = [movie.title, movie.urlPoster, movie.overview, id];
    database.run(sql, params, function () {
      callback(this.changes === 0);
    });
  },

  deleteOne: (id: number, callback: (notFound: boolean) => void) => {
    const sql = "DELETE FROM movies WHERE id = ?";
    const params = [id];
    database.run(sql, params, function () {
      callback(this.changes === 0);
    });
  },
};

export default movieController;
