import {
  IContactForm,
  IParsedContactForm,
  ISimpleContactForm,
} from "@/interfaces";
import { connect, disconnect } from "./db";
import { ContactForm } from "../models";
import { format } from "date-fns";
import es from "date-fns/locale/es";
import { utcToZonedTime } from "date-fns-tz";

export async function saveContactForm(data: ISimpleContactForm) {
  await connect();
  const newForm = new ContactForm(data);
  // const newForm = new ContactForm({ ...data, receivedAt: Date.now() });
  await newForm.save();
  await disconnect();
  return "Enviado con éxito";
}

const compareDate = (a: IContactForm, b: IContactForm) => {
  return b.receivedAt.getTime() - a.receivedAt.getTime();
};

export async function getContactForms(page: number = 1) {
  await connect();
  const forms = await ContactForm.find();
  await disconnect();
  const sortedItems = forms.sort(compareDate);
  return sortedItems.map(
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
  );
}
