import { Appointment } from "../models";
import { connect, disconnect } from "./db";

export async function setAppointment(
  patientId: string,
  startTime: Date,
  duration: number
) {
  try {
    await connect();
    const appointment = await Appointment.create({
      patientId,
    });
  } catch (error) {
    await disconnect();
  }
}
