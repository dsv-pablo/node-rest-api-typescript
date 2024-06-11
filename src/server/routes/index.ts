import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { CidadeControler } from "../controllers";

const router = Router();

router.put("/", (req, res) => {
  res.status(StatusCodes.UNAUTHORIZED).json(req.body);
});

router.put("/cidade", CidadeControler.createValidation, CidadeControler.create);
router.get("/cidade", CidadeControler.getAllValidation, CidadeControler.getAll);

export { router };
