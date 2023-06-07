import {
  IParsedContactForm,
  IPatient,
  contactFormStatusType,
  statusType,
} from "@/interfaces";
import { add } from "date-fns";

export const patients: IPatient[] = [
  {
    _id: "1",
    name: "Jorge Sandoval",
    phoneNumber: "6181234567",
    status: statusType.pending,
  },
  {
    _id: "2",
    name: "Ricardo Rodriguez",
    phoneNumber: "6181234567",
    status: statusType.patient,
  },
  {
    _id: "3",
    name: "Luis Sandoval",
    phoneNumber: "6181234567",
    status: statusType.pending,
  },
  {
    _id: "4",
    name: "Javier Rodriguez",
    phoneNumber: "6181234567",
    status: statusType.appointment,
  },
];

export const contactForms: IParsedContactForm[] = [
  {
    name: "Jorge Sandoval",
    phoneNumber: "6181234567",
    message:
      "Necesito una consulta ginecológica urgente. Por favor, programen una cita lo antes posible. Gracias.",
    receivedAt: add(Date.now(), {
      days: -5,
    }),
    status: contactFormStatusType.success,
  },
  {
    name: "Ricardo Rodriguez",
    phoneNumber: "6181234567",
    message:
      "Quiero programar consultas prenatales. ¿Cuál es el procedimiento y la disponibilidad? Gracias.",
    receivedAt: add(Date.now(), {
      days: -5,
    }),
    status: contactFormStatusType.recall,
  },
  {
    name: "Ricardo Rodriguez",
    phoneNumber: "6181234567",
    message:
      "Quiero programar consultas prenatales. ¿Cuál es el procedimiento y la disponibilidad? Gracias.",
    receivedAt: add(Date.now(), {
      days: -5,
    }),
    status: contactFormStatusType.fail,
  },
  {
    name: "Luis Sandoval",
    phoneNumber: "6181234567",
    message:
      "Solicito información sobre servicios de planificación familiar. Agradecería su ayuda. Saludos.",
    receivedAt: add(Date.now(), {
      days: -4,
    }),
    status: contactFormStatusType.pending,
  },
  {
    name: "Javier Rodriguez",
    phoneNumber: "6181234567",
    message:
      "Necesito discutir mis resultados de exámenes ginecológicos. Por favor, brinden una cita. Gracias.",
    receivedAt: add(Date.now(), {
      days: -2,
    }),
    status: contactFormStatusType.pending,
  },
];
