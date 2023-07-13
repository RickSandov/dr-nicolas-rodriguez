import { IPatient, PartialPatient } from "@/interfaces";
import { Patient } from "../models";
import { connect, disconnect } from "./db";
import { getPatientAppointment } from "./appointment";

export async function getPatients(current: number) {
  try {
    await connect();
    const patients = await Patient.find();
    await disconnect();
    return patients;
  } catch (error) {
    console.log("getPatients: ", { error });
    await disconnect();
    return [];
  }
}

export async function getPatientsWithPrevious(
  current: number
): Promise<IPatient[] | boolean> {
  try {
    await connect();
    const areDifferentPatients = (await Patient.find().count()) > current;
    if (areDifferentPatients) {
      const patients = await Patient.find();
      await disconnect();
      return patients;
    }
    await disconnect();
    return true;
  } catch (error) {
    console.log("getPatients: ", { error });
    await disconnect();
    return [];
  }
}

export async function getPatient(phoneNumber: string) {
  try {
    await connect();
    const patient = await Patient.findOne({ phoneNumber });
    return patient;
  } catch (error) {
    console.log("getPatient: ", { error });
    await disconnect();
    return null;
  }
}

export async function createPatient(patient: PartialPatient) {
  try {
    await connect();
    const newPatient = await Patient.create(patient);
    await disconnect();
    return newPatient;
  } catch (error) {
    await disconnect();
    console.log("createPatient: ", { error });
    return null;
  }
}

export async function getOrCreateClient(patient: PartialPatient) {
  try {
    const { phoneNumber } = patient;
    await connect();
    const patientExists = await Patient.findOne({ phoneNumber });
    if (patientExists) {
      await disconnect();
      return patientExists;
    }
    const newPatient = await createPatient(patient);
    return newPatient;
  } catch (error) {
    await disconnect();
    console.log("getOrCreateClient: ", { error });
    return null;
  }
}

export async function getPatientsIds() {
  try {
    await connect();
    const patients = await Patient.find();
    await disconnect();
    return patients.map(({ _id }) => _id);
  } catch (error) {
    await disconnect();
    console.log("getPatientsIds: ", { error });
    return [];
  }
}

export async function getPatientWithAppointments(patientId: string) {
  try {
    await connect();
    const patient = await Patient.findById(patientId);
    const appointments = await getPatientAppointment(patient!._id);
    await disconnect();
    return { patient, appointments };
  } catch (error) {
    await disconnect();
    return { patient: null, appointments: [] };
  }
}
