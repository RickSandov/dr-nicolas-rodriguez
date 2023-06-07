import { IPatient, statusType, statusTypeArray } from "@/interfaces";
import { model, Model, models, Schema } from "mongoose";

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
    default: statusType.pending,
  },
});

const Patient: Model<IPatient> =
  models.Patient || model("Patient", PatientSchema);

export default Patient;
