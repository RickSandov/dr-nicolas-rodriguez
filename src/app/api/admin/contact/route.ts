import { ContactFormStatusType } from "@/interfaces";
import {
  saveContactForm,
  getContactForms,
  updateContactFormStatus,
} from "@/server/helpers";

export async function POST(req: Request) {
  const body = await req.json();
  const message = await saveContactForm(body);
  return new Response(message, {
    status: 200,
  });
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status") as ContactFormStatusType;
  const forms = await getContactForms(status);
  return new Response(JSON.stringify(forms), {
    status: 200,
  });
}

export async function PATCH(req: Request) {
  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status") as ContactFormStatusType;
  const id = searchParams.get("id") as ContactFormStatusType;
  await updateContactFormStatus(id, status);
}
