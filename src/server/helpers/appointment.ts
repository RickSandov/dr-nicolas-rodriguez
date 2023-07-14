import { addDays, startOfDay, sub } from "date-fns";
import { Appointment } from "../models";
import { connect, disconnect } from "./db";
import { Types } from "mongoose";

export async function setAppointment({
  patientId,
  start,
  end,
  patientName,
  info,
}: {
  patientId: string;
  start: Date;
  end: Date;
  patientName: string;
  info?: string;
}) {
  try {
    await connect();
    const appointment = await Appointment.create({
      patientId,
      start,
      end,
      patientName,
      info,
    });
    return appointment;
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
      $or: [
        {
          starts: { $gte: dayStart, $lt: dayEnd },
        },
      ],
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
    const appointments = await Appointment.find({
      $or: [
        // {
        //   canceled: { $ne: true },
        // },
        // {
        //   attendance: { $ne: true },
        // },
        {
          start: { $gte: sub(new Date(), { days: 1 }) },
        },
      ],
    }).exec();
    await disconnect();
    return appointments.map(
      ({ start, end, info, patientName, _id, canceled, attendance }) => {
        return {
          id: _id.toString(),
          start,
          end,
          info: info || "",
          title: patientName,
          canceled,
          attendance,
        };
      }
    );
  } catch (error) {
    await disconnect();
    console.log("getAppointments: ", { error });
    return [];
  }
}

export async function getPatientAppointment(id: string) {
  try {
    await connect();
    const appointments = await Appointment.find({
      patientId: new Types.ObjectId(id),
    });
    await disconnect();
    return appointments;
  } catch (error) {
    console.log("getPatientAppointment: ", { error });
    await disconnect();
    return null;
  }
}

export async function cancelAppointment(id: string, resume = "") {
  try {
    await connect();
    const appointment = await Appointment.findByIdAndUpdate(id, {
      $set: { canceled: true, resume },
    });
    await disconnect();
    return appointment;
  } catch (error) {
    console.log("cancelAppointment: ", { error });
    await disconnect();
    return null;
  }
}

export async function registerAttendance(id: string, resume = "") {
  try {
    await connect();
    const appointment = await Appointment.findByIdAndUpdate(id, {
      $set: { attendance: true, resume },
    });
    await disconnect();
    return appointment;
  } catch (error) {
    console.log("registerAttendance: ", { error });
    await disconnect();
    return null;
  }
}
