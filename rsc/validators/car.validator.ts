import * as Joi from "joi";

import { ECity, EMarkCar, EModelCar, ETransmission } from "../types/car.types";

export class CarValidator {
  private static mark = Joi.valid(...Object.values(EMarkCar));
  private static model = Joi.valid(...Object.values(EModelCar));
  private static price = Joi.number().min(1000).max(1000000);
  private static year = Joi.number().min(1990).max(new Date().getFullYear());
  private static power = Joi.string().trim().lowercase();
  private static description = Joi.string().trim().lowercase();
  private static city = Joi.valid(...Object.values(ECity));
  private static color = Joi.string().trim().lowercase().min(1).max(20);
  private static transmission = Joi.valid(...Object.values(ETransmission));
  private static carNumber = Joi.string().trim().lowercase().min(1).max(20);
  private static mileage = Joi.number().min(0).max(1000000);
  private static numberOfOwners = Joi.number().min(1).max(100);
  private static accident = Joi.string().trim().lowercase().min(1).max(20);
  private static engine = Joi.string().trim().lowercase().min(1).max(20);

  static createCar = Joi.object({
    mark: this.mark.required(),
    model: this.model.required(),
    price: this.price.required(),
    year: this.year.required(),
    power: this.power.required(),
    description: this.description.required(),
    city: this.city.required(),
    color: this.color.required(),
    transmission: this.transmission.required(),
    carNumber: this.carNumber.required(),
    mileage: this.mileage.required(),
    numberOfOwners: this.numberOfOwners.required(),
    accident: this.accident.required(),
    engine: this.engine.required(),
  });
  static updateCar = Joi.object({
    price: this.price,
    model: this.model,
    mark: this.mark,
    power: this.power,
    year: this.power,
    color: this.color,
    transmission: this.transmission,
    carNumber: this.carNumber,
    mileage: this.mileage,
    numberOfOwners: this.numberOfOwners,
    accident: this.accident,
    engine: this.engine,
    // description: this.description,
  });
}