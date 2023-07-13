import { IAppointment, ObjectValues } from ".";

export const statusType = {
  appointment: "con cita",
  patient: "paciente",
} as const;

export const statusTypeArray = Object.values(statusType);

export type StatusType = ObjectValues<typeof statusType>;

export interface IPatient {
  _id: string;
  name: string;
  phoneNumber: string;
  status: StatusType;
}

export interface IPatientWAppointments extends IPatient {
  appointments: IAppointment[];
}

export interface PartialPatient extends Omit<IPatient, "_id" | "status"> {
  status?: StatusType;
}
