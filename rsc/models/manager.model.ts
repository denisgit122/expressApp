import { model, Schema } from "mongoose";

import { EManagerStatusEnum } from "../enums/manager.enum";

const managerSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },
    status: {
      type: String,
      enum: EManagerStatusEnum,
      required: [true, "Status is required"],
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      unique: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
export const Manager = model("manager", managerSchema);
