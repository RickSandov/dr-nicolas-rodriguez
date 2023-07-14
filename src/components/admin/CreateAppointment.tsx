'use client'

import React, { ChangeEvent, useState } from "react";
import { format, addHours, startOfDay, endOfDay, setHours, parseISO } from "date-fns";
import { IParsedContactForm } from "@/interfaces";
import { useForm } from "react-hook-form";
import Button from "../button/Button";
import { useAppStore } from "@/stores/useAppStore";

const CreateAppointmentFromContactForm = ({ info: {
    name,
    phoneNumber,
}, onClose }: { info: IParsedContactForm, onClose: () => void }) => {

    const [isLoading, postAppointment] = useAppStore(state => [state.isLoading, state.postAppointment]);
    // const [selectedDate, setSelectedDate] = useState(new Date());

    // Función para obtener las horas disponibles
    // const getAvailableHours = () => {
    //     const hours = [];

    //     // Obtenemos el inicio y el fin del día seleccionado
    //     const startOfSelectedDay = setHours(startOfDay(selectedDate), 9); // Establecer la hora de inicio a las 9 am
    //     const endOfSelectedDay = setHours(endOfDay(selectedDate), 20); // Establecer la hora de finalización a las 8 pm

    //     let currentHour = setHours(startOfSelectedDay, 0); // Establecemos la primera hora del día

    //     while (currentHour <= endOfSelectedDay) {
    //         hours.push(currentHour);
    //         currentHour = addHours(currentHour, 1); // Incrementamos una hora
    //     }

    //     return hours;
    // };

    // const handleDateChange = async (e: ChangeEvent<HTMLInputElement>) => {
    //     const date = e.target.value;
    //     const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/days/?date=${date}`);
    //     // const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/appointment/?date=${date}`);
    //     console.log('data: ', await data.json());
    //     setSelectedDate(parseISO(e.target.value));
    // };

    const { register, setValue, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (values: { [key: string]: string }) => {
        const { name, phoneNumber, date, time, duration, info } = values;
        const data = {
            patientName: name,
            phoneNumber,
            day: date,
            time,
            duration,
            info
        }
        postAppointment(data, onClose);
    }

    return (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)} >
            <div>
                <label htmlFor="name"
                    className="block"
                >Nombre de paciente</label>
                <input defaultValue={name} className="border-2 border-primary dark:border-none dark:bg-white text-primary py-1 px-2 rounded-md " {...register("name", { required: 'Es necesario agregar un nombre' })} />
            </div>
            <div>
                <label htmlFor="phoneNumber"
                    className="block"
                >Número de contacto</label>
                <input defaultValue={phoneNumber} className="border-2 border-primary dark:border-none dark:bg-white text-primary py-1 px-2 rounded-md " {...register("phoneNumber", { required: 'Número de 10 dígitos' })} type="number" />
            </div>
            <div>
                <label htmlFor="date"
                    className="block"
                >Fecha</label>
                <input className="border-2 border-primary dark:border-none dark:bg-white text-primary py-1 px-2 rounded-md " {...register("date", { required: 'Es necesario agregar una fecha' })} type="date" />
            </div>
            <div>
                <label htmlFor="time"
                    className="block"
                >Hora de consulta</label>
                <input type="time" className="border-2 border-primary dark:border-none dark:bg-white text-primary py-1 px-2 rounded-md " {...register("time", { required: 'Es necesario agregar una hora' })} />
            </div>
            {/* <div>
                <label htmlFor="time"
                    className="block"
                >Hora de consulta</label>
                <select className="border-2 border-primary dark:border-none dark:bg-white text-primary py-1 px-2 rounded-md " {...register("time", { required: 'Es necesario agregar una hora' })} >
                    {getAvailableHours().map((hour) => (
                        <option key={hour.toString()} value={format(hour, 'HH:mm')}>
                            {format(hour, 'HH:mm')}
                        </option>
                    ))}
                </select>
            </div> */}
            <div>
                <label htmlFor="duration"
                    className="block"
                >Duración</label>
                <input defaultValue={"30"} className="border-2 border-primary dark:border-none dark:bg-white text-primary py-1 px-2 rounded-md " {...register("duration")} type="number" />
            </div>
            <div>
                <label htmlFor="info"
                    className="block"
                >Información extra</label>
                <textarea defaultValue={''} className="border-2 border-primary dark:border-none dark:bg-white text-primary py-1 px-2 rounded-md h-24 w-full resize-none" {...register("info")} />
            </div>
            <Button disabled={isLoading} className="w-full bg-primary text-white dark:bg-secondary dark:text-white mb-5" >
                Agendar
            </Button>
        </form>
    );
};

export default CreateAppointmentFromContactForm;
