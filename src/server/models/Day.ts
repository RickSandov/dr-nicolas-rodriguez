import { IDay, dayType, dayTypeArray } from "@/interfaces/day";
import { Model, Schema, model, models } from "mongoose";

interface day extends Omit<IDay, "_id"> {}

const daySchema = new Schema<day>({
  name: {
    type: String,
    required: true,
    enum: dayTypeArray,
  },
});

const Day: Model<day> = models.Day || model<day>("Day", daySchema);

export default Day;
