import { Request, Response } from "express";
import * as yup from "yup";

import { validation } from "../../shared/middlewares/DataValidator";

interface ICidade {
  nome: string;
  estado: string;
}

export const createValidation = validation((getSchema) => ({
  body: getSchema<ICidade>(
    yup.object().shape({
      nome: yup.string().required().min(3),
      estado: yup.string().required().min(3),
    })
  ),
}));

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  console.log(req.body);

  return res.send("Create!");
};
