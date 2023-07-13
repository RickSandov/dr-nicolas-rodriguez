'use client';

import { useEffect, useState } from "react";
import { IAppointment, IPatient, IPatientWAppointments } from "@/interfaces";
import { api } from "@/api";
import { useAppStore } from "@/stores/useAppStore";
import { toast } from "react-hot-toast";
import FullPatient from './FullPatient';

const Page = ({ params }: { params: { _id: string } }) => {

    const [patient, setPatient] = useState<IPatientWAppointments | null>(null);
    const [isLoading, setIsLoading] = useAppStore(state => [state.isLoading, state.setIsLoading]);

    useEffect(() => {
        const getPatient = async () => {
            setIsLoading(true);
            const { data } = await api.get<{ patient: IPatient, appointments: IAppointment[] }>(`/patients/${params._id}`);
            const { patient, appointments } = data;
            setPatient({ ...patient, appointments });
            setIsLoading(false);
        }
        try {
            getPatient();
        } catch (error) {
            setIsLoading(false);
            toast.error('revise su conexión a internet');
        }
    }, [])

    return (
        <div className="p-4" >
            <h1 className="font-bold text-3xl" >Paciente</h1>
            {isLoading && <p>recuperando información...</p>}
            {patient && <FullPatient patient={patient} />}
        </div>
    )
}

export default Page