import { IPatientWAppointments } from '@/interfaces'
import { format } from 'date-fns';
import es from 'date-fns/locale/es';
import React from 'react'

const FullPatient = ({ patient }: { patient: IPatientWAppointments }) => {
    const { name, phoneNumber, appointments } = patient;
    const appointmentsCount = appointments.length;
    return (
        <div className='p-4 mt-4 transition-all bg-white shadow-light text-primary animate-fade-in rounded-xl' >
            <h2 className='text-xl font-bold text-black capitalize' >{name}</h2>
            <p>{
                phoneNumber.slice(0, 3)
                + ' '
                + phoneNumber.slice(3, 6)
                + ' '
                + phoneNumber.slice(6)
            }</p>
            {appointmentsCount && (
                <div className='mt-4'>
                    <p >Última cita: <strong>{format(new Date(appointments[appointmentsCount - 1].start), 'dd, MMMM yyyy', {
                        locale: es
                    })}</strong></p>
                    <h3 className='mt-3 mb-1 font-bold text-black text-md' >
                        Consultas
                    </h3>
                    <ul className='flex flex-col gap-2' >
                        {appointments.map((appointment, i) => (
                            <li className='p-2 border-2 rounded-lg border-secondary-light' key={i} >
                                <p className='text-right'>{format(new Date(appointment.start), 'dd, MMMM yyyy', { locale: es })}</p>

                                <p className='mb-3 text-sm'>
                                    {
                                        appointment.attendance ? (
                                            'Asistencia registrada.'
                                        ) : ''
                                    }
                                </p>

                                {appointment.canceled && (
                                    <p className='mb-3'><strong>Cancelada</strong></p>
                                )}

                                <p>Horario: <strong>{format(new Date(appointment.start), 'HH:mm', { locale: es })} - {format(new Date(appointment.end), 'HH:mm', { locale: es })}</strong></p>
                                <p>Anotaciones: <strong>{appointment.info ? appointment.info : 'sin anotaciones'}</strong></p>
                                <p>Resumen: <strong>{appointment.resume ? appointment.resume : 'sin resumen'}</strong></p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default FullPatient;