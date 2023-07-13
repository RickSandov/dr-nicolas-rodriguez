import { getPatientsWithPrevious } from "@/server/helpers/patients";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const current = (searchParams.get("current") as string) || "0";
  const patients = await getPatientsWithPrevious(Number(current));
  return new Response(JSON.stringify(patients), {
    status: 200,
  });
}
