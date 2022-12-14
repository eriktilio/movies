import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import moviesRouter from "./routers/movies.router";

dotenv.config();

// App variáveis
const PORT = process.env.API_PORT;
const HOSTNAME = process.env.API_HOSTNAME;
const app = express();

// App configuração
app.use(helmet());
app.use(cors());
app.use(express.json());

// Endpoint raiz
app.get("/", (_req, res) => {
  res.send(`API Movies v${process.env.npm_package_version}`);
});

// Rotas da API
app.use("/api", moviesRouter);

// Inicia o sevidor
app.listen(PORT, () => {
  console.log(`Servidor rodando e: ${HOSTNAME}:${PORT}`);
});
