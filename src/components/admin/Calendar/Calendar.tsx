'use client'
import { isSameDay } from 'date-fns';
import React from 'react'
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import { es } from 'date-fns/locale';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { IEvent } from './CalendarPage';

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

export const MyCalendar = ({ events, setSelectedEvents }: { events: IEvent[], setSelectedEvents: ({ date, events }: { date: Date, events: IEvent[] }) => void }) => {
    return (
        <>
            <Calendar
                localizer={localizer}
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
                views={{
                    month: true,
                    agenda: true
                }}
                events={events}
                startAccessor="start"
                endAccessor="end"
                components={{
                    month: {
                        event: () => {
                            return null;
                        },
                        dateHeader: ({ date }) => {
                            const dayEvents = events.filter((event) => {
                                return isSameDay(event.start, date);
                            })
                            return (
                                <>
                                    <p>{format(date, 'dd')}</p>
                                    {
                                        dayEvents.length > 0 && (
                                            <p onClick={() => {
                                                setSelectedEvents({
                                                    events: dayEvents,
                                                    date: date
                                                })
                                            }} className='mt-2 text-center bg-secondary text-white dark:bg-white dark:text-primary w-[90%] mx-auto' >{dayEvents.length}</p>
                                        )
                                    }
                                </>
                            );
                        }
                    }
                }}
            />
        </>
    )
}
