import { model, Schema, Types } from "mongoose";

import { ECity, EMarkCar, EModelCar, ETransmission } from "../types/car.types";
import { User } from "./User.model";

const carSchema = new Schema(
  {
    mark: {
      type: String,
      enum: EMarkCar,
      trim: true,
      required: [true, "Mark is required"],
      lowercase: true,
    },
    model: {
      type: String,
      enum: EModelCar,
      required: [true, "Model is required"],
      trim: true,
      lowercase: true,
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
      trim: true,
      lowercase: true,
    },
    year: {
      type: Number,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },
    power: {
      type: String,
      required: [true, "Power is required"],
      trim: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      lowercase: true,
    },
    city: {
      type: String,
      enum: ECity,
      required: [true, "City is required"],
    },
    viewsDay: {
      type: Number,
    },
    viewsMonth: {
      type: Number,
    },
    viewsWeek: {
      type: Number,
    },
    averagePriceCarCity: {
      type: Number,
    },
    averagePriceCarUkr: {
      type: Number,
    },
    photo: {
      type: Object,
    },
    color: {
      type: String,
      trim: true,
      required: [true, "Color is required"],
      lowercase: true,
    },
    transmission: {
      type: String,
      enum: ETransmission,
      trim: true,
      required: [true, "Transmission is required"],
      lowercase: true,
    },
    carNumber: {
      type: String,
      trim: true,
      required: [true, "Car number is required"],
      lowercase: true,
    },
    mileage: {
      type: String,
      trim: true,
      required: [true, "Mileage is required"],
      lowercase: true,
    },
    numberOfOwners: {
      type: String,
      trim: true,
      required: [true, "Number of owners is required"],
      lowercase: true,
    },
    accident: {
      type: String,
      trim: true,
      required: [true, "Accident of owners is required"],
      lowercase: true,
    },
    engine: {
      type: String,
      trim: true,
      required: [true, "Engine of owners is required"],
      lowercase: true,
    },
    user: {
      type: Types.ObjectId,
      required: true,
      ref: User,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
export const Car = model("car", carSchema);
