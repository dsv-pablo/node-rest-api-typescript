import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();

router.put("/", (req, res) => {
  res.status(StatusCodes.UNAUTHORIZED).json(req.body);
});

router.put("/teste", (req, res) => {
  res.status(StatusCodes.UNAUTHORIZED).json(req.query.nome);
});

export { router };
