import { Types } from "mongoose";

export interface IAppointment {
  patientId: string;
  starts: Date;
  ends: Date;
  attendance: boolean;
  canceled?: boolean;
  resume: string;
  services: string[];
  info: string;
}
