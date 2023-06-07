import { ObjectValues } from ".";

export const statusType = {
  pending: "pendiente",
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
  //   appointments: [];
}
