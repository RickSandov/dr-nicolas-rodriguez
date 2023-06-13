'use client'

import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import { es } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './styles.css'
import { useState } from 'react'
import { IAppointment } from '@/interfaces'

const locales = {
    'es': es,
};


const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})



export const MyCalendar = ({ events }: {
    events: {
        id: string;
        title: string;
        start: Date;
        end: Date;
    }[]
}) => {

    const [selectedAppointment, setselectedAppointment] = useState<null | {
        id: string;
        title: string;
        start: Date;
        end: Date;
    }>(null)

    return (
        <div>
            <Calendar
                culture='es'
                messages={{
                    week: 'Semana',
                    work_week: 'Semana de trabajo',
                    day: 'Día',
                    month: 'Mes',
                    previous: 'Anterior',
                    next: 'Siguiente',
                    today: 'Hoy',
                    agenda: 'Agenda',
                    date: 'Fecha',
                    time: 'Hora',
                    event: 'Consulta',
                    noEventsInRange: 'No hay consultas asignadas'
                }}
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                components={{
                    event: ({ event, localizer }) => {
                        console.log({ event, localizer })
                        return (
                            <div onClick={() => setselectedAppointment(event)} >{event.title}</div>
                        )
                    }
                }}

            />
            {
                selectedAppointment && <div>{selectedAppointment.title}</div>
            }
        </div>
    )
}