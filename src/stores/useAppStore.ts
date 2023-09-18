import { api, apiLogin } from "@/api";
import { IShortUser } from "@/interfaces/user";
import { toast } from "react-hot-toast";
import { create } from "zustand";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { IPatient } from "@/interfaces";
import { deleteCookie } from "cookies-next";
import { error } from "console";

interface IPostAppointment {
  patientName: string;
  phoneNumber: string;
  day: string;
  time: string;
  duration: string;
  info?: string;
}

interface AppState {
  user: null | IShortUser;
  router: AppRouterInstance | null;
  patients: IPatient[];
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  login: (userName: string, password: string) => Promise<void>;
  getUser: () => Promise<void>;
  setRouter: (router: AppRouterInstance) => void;
  getPatients: () => Promise<void>;
  postAppointment: (
    data: IPostAppointment,
    onClose: () => void
  ) => Promise<void>;
  changePassword: (
    prevPassword: string,
    password: string,
    onClose: () => void
  ) => Promise<void>;
  logout: () => void;
  cancelAppointment: (id: string, resume: string) => Promise<void>;
  registerAttendance: (id: string, resume: string) => Promise<void>;
  updateContactCardStatus: (
    phoneNumber: string,
    status: string,
    onClose: () => void
  ) => Promise<void>;
}

export const useAppStore = create<AppState>((set, get) => ({
  user: null,
  router: null,
  patients: [],
  isLoading: false,
  setIsLoading: (value) => set({ isLoading: value }),
  getPatients: async () => {
    set({ isLoading: true });
    const patientsLength = get().patients.length;
    try {
      const { data } = await api.get<IPatient[] | boolean>(
        `/patients?current=${patientsLength}`
      );
      set({ isLoading: false });
      if (typeof data === "boolean") {
        return;
      }
      if (data) {
        set({ patients: data });
      }
    } catch (error) {
      set({ isLoading: false });
    }
  },
  setRouter: (router) => set({ router }),
  login: async (userName: string, password: string) => {
    const req = apiLogin.post<IShortUser>("/login", { userName, password });
    toast.promise(req, {
      loading: "iniciando sesión",
      success: ({ data }) => {
        set({ user: data });
        get().router?.push("/admin");
        return `Sesión iniciada con éxito`;
      },
      error: (error) => {
        console.log({ error });
        return "usuario o contraseña incorrectos";
      },
    });
  },
  getUser: async () => {
    const req = api.get<IShortUser>("/user");
    toast.promise(req, {
      loading: "recuperando información",
      success: ({ data }) => {
        // console.log({ data });
        set({ user: data });
        return `Hola, ${data.displayName}!`;
      },
      error: (error) => {
        console.log({ error });
        return "revise su conexión a internet";
      },
    });
  },
  postAppointment: async (data: IPostAppointment, onClose: () => void) => {
    console.log("from post appointment");
    const req = api.post("/appointment", data);
    toast.promise(
      req,
      {
        loading: "Agendando consulta",
        success: () => {
          onClose();
          get().router?.push("/admin/agenda");
          return "Consulta agendada con éxito";
        },
        error: "Ocurrió un error, revise su conexión a internet",
      },
      {
        duration: 5000,
      }
    );
  },
  changePassword: async (
    prevPassword: string,
    password: string,
    onClose: () => void
  ) => {
    const req = api.put("/user/password", {
      prevPassword,
      password,
    });
    toast.promise(req, {
      loading: "cambiando contraseña",
      success: ({ data }) => {
        console.log({ data });
        onClose();
        return "Contraseña cambiada con éxito";
      },
      error: "Contraseña incorrecta",
    });
  },
  logout: () => {
    set({ user: null });
    deleteCookie("auth");
    get().router?.push("/login");
  },
  cancelAppointment: async (id: string, resume: string) => {
    const req = api.post(`/appointment/cancel`, {
      resume,
      id,
    });
    toast.promise(req, {
      loading: "cancelando consulta",
      success: () => {
        get().router?.push("/admin/pacientes");
        return "Consulta cancelada con éxito";
      },
      error: "Ocurrió un error, revise su conexión a internet",
    });
  },
  registerAttendance: async (id: string, resume: string) => {
    const req = api.post(`/appointment/register`, {
      id,
      resume,
    });
    toast.promise(req, {
      loading: "registrando consulta",
      success: () => {
        get().router?.push("/admin/pacientes");
        return "Consulta registrada con éxito";
      },
      error: "Ocurrió un error, revise su conexión a internet",
    });
  },
  updateContactCardStatus: async (
    phoneNumber: string,
    status: string,
    onClose: () => void
  ) => {
    const req = api.patch(`/contact`, {
      phoneNumber,
      status,
    });
    toast.promise(req, {
      loading: "actualizando estado",
      success: ({ data }) => {
        onClose();
        get().router?.push("/admin?status=" + status);
        return "Estado actualizado con éxito";
      },
      error: (error) => {
        console.log({ error });
        return "Ocurrió un error, revise su conexión a internet";
      },
    });
  },
}));
