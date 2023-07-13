import { DayType, dayTypeArray } from "@/interfaces/day";
import { getDayAppointments } from "@/server/helpers/appointment";
import { connect, disconnect } from "@/server/helpers/db";
import Day from "@/server/models/Day";
import { parseISO } from "date-fns";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const day = (searchParams.get("day") as DayType) || "";
  const date = (searchParams.get("date") as DayType) || "";

  if (!day && !date) {
    await connect();
    const days = await Day.find();
    await disconnect();
    return new Response(JSON.stringify(days), {
      status: 200,
    });
  }

  if (day && !dayTypeArray.includes(day)) {
    return new Response("Day not found", {
      status: 400,
    });
  }

  if (!date) {
    return new Response("Date not found", {
      status: 400,
    });
  }

  const dayAppointments = await getDayAppointments(parseISO(date));

  return new Response(JSON.stringify({}), {
    status: 200,
  });
}
