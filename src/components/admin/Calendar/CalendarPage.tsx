'use client'

import format from 'date-fns/format'
import { es } from 'date-fns/locale';
import { useEffect, useState } from 'react'
import { Modal } from '@/components/modal/Modal'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import './styles.css'
import { MyCalendar } from './Calendar';
import { parseISO } from 'date-fns';


export interface IEvent {
    id: string;
    title: string;
    start: Date;
    end: Date;
    info: string;
}

export const CalendarPage = ({ events }: {
    events: IEvent[]
}) => {

    const [eventsList, setEventsList] = useState(events);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/appointment`)
            .then(res => res.json()).then(data => {
                // setEventsList(data);
                setEventsList(data.map((event: any) => ({
                    ...event,
                    start: parseISO(event.start),
                    end: parseISO(event.end)
                })))
            })
    }, [])

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
                                                    key={event.id}
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
            <MyCalendar events={eventsList} setSelectedEvents={setSelectedEvents} />
        </div>
    )
}