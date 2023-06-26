import { ObjectValues } from ".";

export const dayType = {
  lunes: "lunes",
  martes: "martes",
  miercoles: "miercoles",
  jueves: "jueves",
  viernes: "viernes",
  sabado: "sabado",
  domingo: "domingo",
} as const;

export const dayTypeArray = Object.values(dayType);

export type DayType = ObjectValues<typeof dayType>;

export interface IDay {
  _id: string;
  name: DayType;
  availableHours: string[];
}
