import { IAppointment } from "@/interfaces";
import {
  model,
  Model,
  models,
  Schema,
  SchemaType,
  SchemaTypes,
  Types,
} from "mongoose";

interface ISchema extends Omit<IAppointment, "patientId"> {
  patientId: Types.ObjectId;
}

//   patientId: string;
//   starts: Date;
//   ends: Date;
//   attendance: boolean;
//   canceled?: boolean;
//   resume: string;
//   services: string[];
//   info: string;

const AppointmentSchema = new Schema<ISchema>({
  patientName: {
    type: String,
    required: true,
  },
  patientId: {
    type: SchemaTypes.ObjectId,
    ref: "Patient",
    required: true,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  attendance: {
    type: Boolean,
    required: false,
  },
  canceled: {
    type: Boolean,
    required: false,
  },
  resume: {
    type: String,
    required: false,
  },
  services: {
    type: [String],
    required: false,
  },
  info: {
    type: String,
    required: false,
  },
});

const Appointment: Model<ISchema> =
  models.Appointment || model("Appointment", AppointmentSchema);

export default Appointment;
