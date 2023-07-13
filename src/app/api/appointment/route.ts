import { contactFormStatusType, statusType } from "@/interfaces";
import { updateContactFormStatus } from "@/server/helpers";
import {
  getAppointmentsAsEvent,
  setAppointment,
} from "@/server/helpers/appointment";
import { getOrCreateClient } from "@/server/helpers/patients";
import { parse, addMinutes } from "date-fns";

// GET available hours
export async function GET(req: Request) {
  // const appointments: IAppointment[] = [];
  // const { searchParams } = new URL(req.url);
  // const paramsDate = searchParams.get("date");

  // if (paramsDate) {
  //   const date = parseISO(paramsDate);
  //   const appointments = await getDayAppointments(date);
  //   console.log({ appointments });
  // }
  const appointments = await getAppointmentsAsEvent();
  return new Response(JSON.stringify(appointments), {
    status: 200,
  });
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      patientName: string;
      phoneNumber: string;
      day: string;
      time: string;
      duration: string;
      info?: string;
    };
    const { patientName, phoneNumber, day, time, duration, info = "" } = body;
    console.log({ body });

    const patient = await getOrCreateClient({
      name: patientName,
      phoneNumber,
      status: statusType.appointment,
    });
    if (!patient) {
      return new Response(JSON.stringify({}), {
        status: 400,
      });
    }

    const startDate = parse(`${day} ${time}`, "yyyy-MM-dd HH:mm", new Date());
    const endDate = addMinutes(startDate, Number(duration));

    const appointment = await setAppointment({
      patientId: patient._id,
      start: startDate,
      end: endDate,
      patientName,
      info,
    });

    await updateContactFormStatus(phoneNumber, contactFormStatusType.success);

    return new Response(JSON.stringify({ appointment }), {
      status: 200,
    });
  } catch (error) {
    console.log("POST: ", { error });
    // return error response
    return new Response(JSON.stringify({}), {
      status: 400,
    });
  }
}
