import { ISimpleContactForm } from "@/interfaces";
import { saveContactForm } from "@/server/helpers";
import { sendShippingInfoEmail } from "./mails";

export async function POST(req: Request) {
  const body = await req.json();
  const message = await saveContactForm(body as ISimpleContactForm);
  const ok = sendShippingInfoEmail(body as ISimpleContactForm);
  return new Response(message, {
    status: 200,
  });
}
