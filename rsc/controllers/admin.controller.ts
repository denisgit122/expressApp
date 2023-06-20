import { NextFunction, Request, Response } from "express";

import { Admin } from "../models/admin.model";
import { adminrService } from "../services/admin.service";
import { IAdmin } from "../types/admin.types";

class AdminController {
  public async getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<IAdmin>> {
    try {
      const admin = await Admin.find();
      return res.status(201).json(admin);
    } catch (e) {
      next(e);
    }
  }

  public async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<void>> {
    try {
      await adminrService.createAdmin(req.body);
      return res.sendStatus(201);
    } catch (e) {
      next(e);
    }
  }
}
export const adminController = new AdminController();
