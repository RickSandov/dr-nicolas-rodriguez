import { IPatient, contactFormStatusType, statusTypeArray } from "@/interfaces";
import {
  model,
  Model,
  models,
  Schema,
  SchemaType,
  SchemaTypes,
} from "mongoose";

const PatientSchema = new Schema<IPatient>({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  status: {
    type: String,
    enum: statusTypeArray,
    default: contactFormStatusType.pending,
  },
});

const Patient: Model<IPatient> =
  models.Patient || model("Patient", PatientSchema);

export default Patient;
