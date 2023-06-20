import { Router } from "express";

import { carController } from "../controllers/car.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { carMiddleware } from "../middlewares/car.middleware";
import { fileMiddleware } from "../middlewares/file.middleware";

const router = Router();
router.get("/", carController.getAll);

router.get(
  "/:carId",
  authMiddleware.checkAccessToken,
  carMiddleware.isValidId,
  carMiddleware.getByIdAndThrow,
  carMiddleware.isValidaVeragePriceCarCity,
  carController.getOne
);
router.get(
  "/car/:carId",
  carMiddleware.isValidId,
  carMiddleware.getByIdAndThrow,
  carController.getOneWithOutAccess
);

router.post(
  "/",
  authMiddleware.checkAccessToken,
  carMiddleware.isValidCreate,
  carMiddleware.isValidDescription,
  carController.create
);

router.put(
  "/:carId",
  authMiddleware.checkAccessToken,
  carMiddleware.isValidId,
  carMiddleware.getByIdAndThrow,
  carMiddleware.isValidUpdate,
  carController.update
);
//views
router.put(
  "/viewsDay/:carId",
  authMiddleware.checkAccessToken,
  carMiddleware.isValidId,
  carMiddleware.getByIdAndThrow,
  carController.allViews
);
router.put(
  "/:carId/photo",
  authMiddleware.checkAccessToken,
  carMiddleware.isValidId,
  fileMiddleware.isPhotoValid,
  carMiddleware.getByIdAndThrow,
  carController.uploadPhoto
);

router.get(
  "/getMyCars/car",
  authMiddleware.checkAccessToken,
  carController.getMyCar
);
export const CarRouter = router;
