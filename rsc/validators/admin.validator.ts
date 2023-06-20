import * as Joi from "joi";

import { regexPasAndEma } from "../constants/regex.constants";
import { EManagerStatusEnum } from "../enums/manager.enum";

export class AdminValidator {
  private static firstName = Joi.string().min(2).max(50).trim();
  private static email = Joi.string()
    .regex(regexPasAndEma.EMAIL)
    .trim()
    .lowercase();
  private static password = Joi.string().regex(regexPasAndEma.PASSWORD).trim();
  private static status = Joi.valid(...Object.values(EManagerStatusEnum));

  static createManager = Joi.object({
    name: this.firstName.required(),
    email: this.email.required(),
    password: this.password.required(),
    status: this.status.required(),
  });
}
