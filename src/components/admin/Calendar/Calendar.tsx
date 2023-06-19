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
import { isSameDay } from 'date-fns'
import { Modal } from '@/components/modal/Modal'
import { useAutoAnimate } from '@formkit/auto-animate/react'

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

interface IEvent {
    id: string;
    title: string;
    start: Date;
    end: Date;
    info: string;
}

export const MyCalendar = ({ events }: {
    events: IEvent[]
}) => {

    const [selectedAppointment, setselectedAppointment] = useState<null | {
        id: string;
        title: string;
        start: Date;
        end: Date;
    }>(null)

    const [selectedEvents, setSelectedEvents] = useState<{
        date: Date;
        events: IEvent[]
    } | null>(null);

    return (
        <div className='relative pt-4' >
            <Modal
                className='overflow-y-hidden'
                isActive={!!selectedEvents}
                onClose={() => {
                    setSelectedEvents(null)
                }}
                title={selectedEvents ? format(selectedEvents?.date, 'EEEE dd-MMM', {
                    locale: es
                }) : ''}
            >
                {
                    selectedEvents && (
                        <>
                            <ul className='flex flex-col gap-2 pb-4'>
                                {
                                    selectedEvents.events.map((event) => {
                                        const isSelected = selectedAppointment?.id === event.id
                                        return (
                                            <>

                                                <li
                                                    onClick={() => {
                                                        if (isSelected) {
                                                            return setselectedAppointment(null);
                                                        }
                                                        setselectedAppointment(event)
                                                    }}
                                                    className='flex border-b-[1px] border-black py-2 cursor-pointer'
                                                >
                                                    <span className='text-primary dark:text-primary-light mr-2' >{format(event.start, 'HH:mm')}</span>
                                                    <div>
                                                        <p className='inline' >{event.title}</p>
                                                        {
                                                            isSelected && (
                                                                <>
                                                                    <p className='text-secondary dark:text-secondary-light' >
                                                                        {
                                                                            event.info.length ? event.info : 'no hay anotaciones'
                                                                        }
                                                                    </p>
                                                                </>
                                                            )
                                                        }
                                                    </div>
                                                </li>

                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </>

                    )
                }
            </Modal>
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
        </div>
    )
}