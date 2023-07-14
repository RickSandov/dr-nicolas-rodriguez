import { registerAttendance } from "@/server/helpers/appointment";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      id: string;
      resume: string;
    };

    await registerAttendance(body.id, body.resume);
    return new Response(JSON.stringify({}), {
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
