import {
  contactFormStatusType,
  contactFormStatusTypeArray,
  IContactForm,
} from "@/interfaces";
import { model, Model, models, Schema, SchemaTypes, Types } from "mongoose";

interface ISchema extends Omit<IContactForm, "patientId"> {
  patientId: Types.ObjectId;
}

const ContactFormSchema = new Schema<ISchema>({
  patientId: {
    type: SchemaTypes.ObjectId,
    ref: "Patient",
    required: true,
  },
  message: {
    type: String,
  },
  receivedAt: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: String,
    enum: contactFormStatusTypeArray,
    default: contactFormStatusType.pending,
  },
});

const ContactForm: Model<ISchema> =
  models.ContactForm || model("ContactForm", ContactFormSchema);

export default ContactForm;
