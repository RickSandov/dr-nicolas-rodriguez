'use client';
import { useAppStore } from "@/stores/useAppStore";
import { useEffect } from "react";
import { PatientsList } from "./PatientsList";

// const Page = ({ params }: { params: { slug: string } }) => {
const Page = () => {

    const getPatients = useAppStore((state) => state.getPatients);
    const patients = useAppStore((state) => state.patients);
    const isLoading = useAppStore((state) => state.isLoading);

    useEffect(() => {
        getPatients();
    }, [])

    return (
        <div className="p-4" >
            {isLoading ? <h1 className="text-xl">Recuperando pacientes...</h1> : <PatientsList patients={patients} />}
        </div>
    )
}

export default Page