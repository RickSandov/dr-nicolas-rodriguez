'use client'

import format from 'date-fns/format'
import { es } from 'date-fns/locale';
import { useEffect, useState } from 'react'
import { Modal } from '@/components/modal/Modal'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import './styles.css'
import { MyCalendar } from './Calendar';
import { parseISO } from 'date-fns';
import { api } from '@/api';
import { useForm } from 'react-hook-form';
import Button from '@/components/button/Button';
import { useAppStore } from '@/stores/useAppStore';


export interface IEvent {
    id: string;
    title: string;
    start: Date;
    end: Date;
    info: string;
    canceled?: boolean;
    attendance?: boolean;
}

export const CalendarPage = ({ events }: {
    events: IEvent[]
}) => {

    const [eventsList, setEventsList] = useState(events);

    useEffect(() => {
        api.get('/appointment').then(({ data }) => {
            setEventsList(data.map((event: any) => ({
                ...event,
                start: parseISO(event.start),
                end: parseISO(event.end)
            })))
        })
    }, [])

    const [selectedAppointment, setselectedAppointment] = useState<null | IEvent>(null)

    const [selectedEvents, setSelectedEvents] = useState<{
        date: Date;
        events: IEvent[]
    } | null>(null);

    const { register, handleSubmit, reset, getValues } = useForm();
    const cancelAppointment = useAppStore(state => state.cancelAppointment)
    const registerAttendance = useAppStore(state => state.registerAttendance)

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
                            <ul className='flex flex-col gap-2 pb-4 w-full'>
                                {
                                    selectedEvents.events.map((event) => {
                                        const isSelected = selectedAppointment?.id === event.id;

                                        return (
                                            <>

                                                <li
                                                    key={event.id}
                                                    className=' flex-1 flex border-b-[1px] border-black py-2 cursor-pointer'
                                                >
                                                    <span className='text-primary dark:text-primary-light mr-2' >{format(event.start, 'HH:mm')}</span>
                                                    <div className='w-full'>
                                                        <p className='inline' onClick={() => {
                                                            if (isSelected) {
                                                                return setselectedAppointment(null);
                                                            }
                                                            setselectedAppointment(event)
                                                        }}>
                                                            <p className='text-sm'>
                                                                {
                                                                    event.attendance ? (
                                                                        'Asistencia registrada.'
                                                                    ) : event.canceled ?
                                                                        'Cancelada.' : ''
                                                                }
                                                            </p>
                                                            <strong>
                                                                {event.title}
                                                            </strong>
                                                        </p>
                                                        {
                                                            isSelected && (
                                                                <>
                                                                    <p className='text-secondary dark:text-secondary-light' >
                                                                        {
                                                                            event.info.length ? event.info : 'no hay anotaciones'
                                                                        }
                                                                    </p>

                                                                    {
                                                                        event.attendance || event.canceled ? '' : (
                                                                            <div className='w-full mt-2' >
                                                                                <div >
                                                                                    <label className="block" htmlFor="resume">Resumen de consulta</label>
                                                                                    <textarea className="resize-none h-20 w-full border-2 border-primary dark:border-none dark:bg-white text-primary py-1 px-2 rounded-md " {...register("resume")} />
                                                                                </div>
                                                                                <div className="flex justify-end gap-2">
                                                                                    <Button className='flex-1 bg-secondary-light' onClick={() => {
                                                                                        const { resume } = getValues();
                                                                                        cancelAppointment(event.id, resume)
                                                                                    }} >Cancelar cita</Button>
                                                                                    <Button className='flex-1 bg-secondary-light' onClick={() => {
                                                                                        const { resume } = getValues();
                                                                                        registerAttendance(event.id, resume)
                                                                                    }} >Registrar asistencia</Button>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    }
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