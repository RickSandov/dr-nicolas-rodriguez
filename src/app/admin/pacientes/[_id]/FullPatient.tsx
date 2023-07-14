import { IPatientWAppointments } from '@/interfaces'
import { format } from 'date-fns';
import es from 'date-fns/locale/es';
import React from 'react'

const FullPatient = ({ patient }: { patient: IPatientWAppointments }) => {
    const { name, phoneNumber, appointments } = patient;
    const appointmentsCount = appointments.length;
    return (
        <div className='bg-white shadow-light p-4 text-primary mt-4 transition-all animate-fade-in rounded-xl' >
            <h2 className='font-bold text-xl capitalize text-black' >{name}</h2>
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
                    <h3 className='mt-3 text-black font-bold text-md mb-1' >
                        Consultas
                    </h3>
                    <ul className='flex flex-col gap-2' >
                        {appointments.map((appointment, i) => (
                            <li className='border-secondary-light border-2 p-2 rounded-lg' key={i} >
                                <p className='text-right'>{format(new Date(appointment.start), 'dd, MMMM yyyy', { locale: es })}</p>

                                <p className='text-sm mb-3'>
                                    {
                                        appointment.attendance ? (
                                            'Asistencia registrada.'
                                        ) : appointment.canceled ?
                                            'Cancelada.' : ''
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