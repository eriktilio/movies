import sqlite3 from "sqlite3";

const DBSOURCE = "temp.db";
const SQL_MOVIES_CREATE = `
    CREATE TABLE IF NOT EXISTS movies (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        urlPoster TEXT,
        overview TEXT
    )`;

const database = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.log(err);
    throw err;
  } else {
    console.log("Base de dados conectada com sucesso.");
    database.serialize(() => {
      database.run(SQL_MOVIES_CREATE, (err) => {
        if (err) {
          console.log(err.message);
          throw err;
        } else {
          console.log("Tabela itens criada com sucesso.");
        }
      });
    });
  }
});

export default database;
