import {
  ContactFormStatusType,
  IContactForm,
  ISimpleContactForm,
} from "@/interfaces";
import { connect, disconnect } from "./db";
import { ContactForm } from "../models";
import { format } from "date-fns";
import es from "date-fns/locale/es";
import { utcToZonedTime } from "date-fns-tz";

export async function saveContactForm(data: ISimpleContactForm) {
  await connect();
  await ContactForm.create(data);
  await disconnect();
  return "Enviado con éxito";
}

const compareDate = (a: IContactForm, b: IContactForm) => {
  return b.receivedAt.getTime() - a.receivedAt.getTime();
};
let counter = 1;
export async function getContactForms(status: ContactFormStatusType) {
  await connect();
  const forms = await ContactForm.find({ status });
  await disconnect();
  const sortedItems = forms.sort(compareDate);
  return JSON.parse(
    JSON.stringify(
      sortedItems.map(
        ({ name, phoneNumber, message, status, receivedAt, _id }) => {
          const zonedReceivedAt = utcToZonedTime(receivedAt, "Etc/GMT+6");
          const formattedDate = format(zonedReceivedAt, "MMM/dd HH:mm", {
            locale: es,
          });
          return {
            _id,
            name,
            phoneNumber,
            message,
            status,
            receivedAt: formattedDate,
          };
        }
      )
    )
  );
}

export async function updateContactFormStatus(
  phoneNumber: string,
  status: ContactFormStatusType
) {
  try {
    await connect();
    await ContactForm.findOneAndUpdate({ phoneNumber }, { status });
    await disconnect();
  } catch (error) {
    console.log({ error });
  }
}
