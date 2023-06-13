import { saveContactForm, getContactForms } from "@/server/helpers";

export async function POST(req: Request) {
  const body = await req.json();
  const message = await saveContactForm(body);
  return new Response(message, {
    status: 200,
  });
}

export async function GET(req: Request) {
  const forms = await getContactForms();
  return new Response(JSON.stringify(forms), {
    status: 200,
  });
}
