import { ObjectValues } from ".";

export const contactFormStatusType = {
  pending: "pendiente contactar",
  recall: "volver a llamar",
  success: "paciente",
  fail: "no paciente",
} as const;

export const contactFormStatusTypeArray = Object.values(contactFormStatusType);

export type ContactFormSStatusType = ObjectValues<typeof contactFormStatusType>;

export interface IContactForm {
  // patientId: string;
  _id: string;
  name: string;
  phoneNumber: string;
  message: string;
  receivedAt: Date;
  status: ContactFormSStatusType;
}

export interface IParsedContactForm extends Omit<IContactForm, "receivedAt"> {
  receivedAt: string;
}

export interface ISimpleContactForm {
  name: string;
  phoneNumber: string;
  message: string;
}
