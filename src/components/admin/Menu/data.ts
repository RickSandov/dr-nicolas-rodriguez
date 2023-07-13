import { UserType, userType } from "@/interfaces/user";

export const links: { text: string; to: string; roles: UserType[] }[] = [
  {
    text: "inicio",
    to: "/admin",
    roles: [userType.admin, userType.employee],
  },
  {
    text: "agenda",
    to: "/admin/agenda",
    roles: [userType.admin],
  },
  {
    text: "pacientes",
    to: "/admin/pacientes",
    roles: [userType.admin, userType.employee],
    // roles: [userType.admin],
  },
];
