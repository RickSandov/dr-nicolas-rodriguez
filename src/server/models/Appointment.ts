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
const AppointmentSchema = new Schema<ISchema>({
  patientId: {
    type: SchemaTypes.ObjectId,
    ref: "Patient",
  },
  starts: {
    type: Date,
    required: true,
  },
  ends: {
    type: Date,
    required: true,
  },
});

const Appointment: Model<ISchema> =
  models.Appointment || model("Appointment", AppointmentSchema);

export default Appointment;
