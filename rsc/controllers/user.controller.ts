import { NextFunction, Request, Response } from "express";

import { ApiError } from "../errors/api.error";
import { Admin } from "../models/admin.model";
import { Manager } from "../models/manager.model";
import { User } from "../models/User.model";
import { IUser, IUserComment } from "../models/user.types";
import { userService } from "../services/user.service";

class UserController {
  public async getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<IUser[]>> {
    try {
      const users = await userService.getAll();
      return res.json(users);
    } catch (e) {
      next(e);
    }
  }

  public async getOne(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<IUser>> {
    try {
      const { userId } = req.params;
      const user = await userService.getOne(userId);

      return res.json(user);
    } catch (e) {
      next(e);
    }
  }

  public async getByEmail(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<IUser>> {
    try {
      const { email } = req.params;

      const user = await User.findOne({ email: email });
      const admin = await Admin.findOne({ email: email });
      const manager = await Manager.findOne({ email: email });

      if (user && !admin && !manager) {
        const user = await userService.getOneByEmailUser(email);
        return res.json(user);
      } else if (admin && !user && !manager) {
        const admin = await userService.getOneByEmailAdmin(email);
        return res.json(admin);
      } else if (manager && !admin && !user) {
        const manager = await userService.getOneByEmailManager(email);
        return res.json(manager);
      }
    } catch (e) {
      next(e);
    }
  }

  public async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<IUserComment<IUser>>> {
    try {
      const body = req.body;
      const user = await User.create({ ...body });
      return res.json({
        message: "User created",
        data: user,
      });
    } catch (e) {
      next(e);
    }
  }

  public async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<IUserComment<IUser>>> {
    try {
      const { userId } = req.params;
      const { jwtPayload } = req.res.locals;

      const manager = await Manager.findById(jwtPayload._id);
      const user = await User.findById(jwtPayload._id);
      let updateUser = "";
      if (manager || jwtPayload._id === userId) {
        updateUser = await User.findByIdAndUpdate(
          userId,
          { ...req.body },
          { new: true }
        );
      } else if (manager && !user) {
        updateUser = await User.findByIdAndUpdate(
          userId,
          { ...req.body },
          { new: true }
        );
      } else if (!manager && user) {
        throw new ApiError("User cant update other user", 404);
      }
      return res.status(201).json(updateUser);
    } catch (e) {
      next(e);
    }
  }

  public async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<void>> {
    try {
      const { userId } = req.params;
      const { jwtPayload } = req.res.locals;

      await userService.delete(userId, jwtPayload);

      return res.sendStatus(200);
    } catch (e) {
      next(e);
    }
  }

  public async uploadFav(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<void>> {
    try {
      const { jwtPayload } = req.res.locals;
      const dat = req.body;
      const fav = await User.findByIdAndUpdate(
        jwtPayload._id,
        { favorite: dat },
        { new: true }
      );
      console.log(fav);
      return res.status(201).json(fav);
    } catch (e) {
      next(e);
    }
  }
  public async getOneByAccess(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<void>> {
    try {
      const { jwtPayload } = req.res.locals;

      const fav = await User.findById(jwtPayload._id);

      return res.status(201).json(fav);
    } catch (e) {
      next(e);
    }
  }
}
export const userController = new UserController();
