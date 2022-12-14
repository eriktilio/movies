import { Request } from "express";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (_req: Request, _file: Express.Multer.File, cb) => {
    cb(null, "../../movies/app-movies/public/uploads/");
  },
  filename: (_req: Request, file: Express.Multer.File, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

export default upload;
