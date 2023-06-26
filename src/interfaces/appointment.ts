import { Types } from "mongoose";

export interface IAppointment {
  patientId: string;
  patientName: string;
  start: Date;
  end: Date;
  attendance?: boolean;
  canceled?: boolean;
  resume?: string;
  services?: string[];
  info?: string;
}
