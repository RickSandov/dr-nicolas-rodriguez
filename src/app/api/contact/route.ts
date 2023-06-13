import { saveContactForm } from "@/server/helpers";

export async function POST(req: Request) {
  const body = await req.json();
  console.log({ body });
  const message = await saveContactForm(body);
  return new Response(message, {
    status: 200,
  });
}
