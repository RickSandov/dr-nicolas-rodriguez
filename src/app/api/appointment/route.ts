import { IAppointment } from "@/interfaces";
import { getDayAppointments } from "@/server/helpers/appointment";
import { Appointment } from "@/server/models";
import { addDays, parseISO, startOfDay } from "date-fns";

// GET available hours
export async function GET(req: Request) {
  const appointments: IAppointment[] = [];
  const { searchParams } = new URL(req.url);
  const paramsDate = searchParams.get("date");

  if (paramsDate) {
    const date = parseISO(paramsDate);
    const appointments = await getDayAppointments(date);
    console.log({ appointments });
  }

  return new Response(JSON.stringify({ appointments }), {
    status: 200,
  });
}
