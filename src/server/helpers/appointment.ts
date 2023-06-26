import { addDays, startOfDay } from "date-fns";
import { Appointment } from "../models";
import { connect, disconnect } from "./db";

export async function setAppointment(
  patientId: string,
  startTime: Date,
  duration: number
) {
  try {
    await connect();
    const appointment = await Appointment.create({});
  } catch (error) {
    await disconnect();
  }
}

export async function getDayAppointments(date: Date) {
  try {
    await connect();
    const dayStart = startOfDay(date);
    const dayEnd = addDays(dayStart, 1);

    const appointments = await Appointment.find({
      // $or: [
      //   {
      //     starts: { $gte: dayStart, $lt: dayEnd },
      //   },
      // ],
    });

    await disconnect();
    return appointments;
  } catch (error) {
    console.log("getDayAppointments: ", { error });
    await disconnect();
    return [];
  }
}

export async function getAppointmentsAsEvent() {
  try {
    await connect();
    const appointments = await Appointment.find();
    await disconnect();
    return appointments.map(({ start, end, info, patientName, _id }) => {
      return {
        id: _id.toString(),
        start,
        end,
        info,
        title: patientName,
      };
    });
  } catch (error) {
    await disconnect();
    console.log("getAppointments: ", { error });
    return [];
  }
}
