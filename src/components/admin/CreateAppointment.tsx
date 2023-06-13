'use client'

import React, { ChangeEvent, useState } from "react";
import { format, addHours, startOfDay, endOfDay, setHours } from "date-fns";
import { IParsedContactForm } from "@/interfaces";

const CreateAppointmentFromContactForm = ({ info: {
    _id,
    message,
    name,
} }: { info: IParsedContactForm }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    // Función para obtener las horas disponibles
    const getAvailableHours = () => {
        const hours = [];

        // Obtenemos el inicio y el fin del día seleccionado
        const startOfSelectedDay = setHours(startOfDay(selectedDate), 9); // Establecer la hora de inicio a las 9 am
        const endOfSelectedDay = setHours(endOfDay(selectedDate), 20); // Establecer la hora de finalización a las 8 pm

        let currentHour = setHours(startOfSelectedDay, 0); // Establecemos la primera hora del día

        while (currentHour <= endOfSelectedDay) {
            hours.push(currentHour);
            currentHour = addHours(currentHour, 1); // Incrementamos una hora
        }

        return hours;
    };

    // Función para manejar el cambio de fecha
    const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(new Date(e.target.value));
    };

    return (
        <div>
            <h3 className="text-xl text-secondary text-center mb-4" >Agendar cita</h3>
            <p>Paciente: <strong>{name}</strong></p>
            <label htmlFor="date">Selecciona una fecha:</label>
            <input
                type="date"
                id="date"
                value={format(selectedDate, "yyyy-MM-dd")}
                onChange={handleDateChange}
            />
            <h2>Horas disponibles:</h2>
            <ul>
                {getAvailableHours().map((hour) => (
                    <li key={hour.toString()}>{format(hour, "HH:mm")}</li>
                ))}
            </ul>
        </div>
    );
};

export default CreateAppointmentFromContactForm;
