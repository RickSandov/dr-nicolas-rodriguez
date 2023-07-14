import { getPatientWithAppointments } from "@/server/helpers/patients";

export async function GET(req: Request) {
  const { pathname } = new URL(req.url);
  const id = pathname.split("/")[4] || "0";
  const { patient, appointments } = await getPatientWithAppointments(id);
  return new Response(JSON.stringify({ patient, appointments }), {
    status: 200,
  });
}
