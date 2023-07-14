import React from 'react'
import { IEvent } from './CalendarPage';

export const Event = ({ event }: { event: IEvent }) => {

    // const isSelected = selectedAppointment?.id === event.id
    // return (
    //     <>

    //         <li
    //             key={event.id}
    //             onClick={() => {
    //                 if (isSelected) {
    //                     return setselectedAppointment(null);
    //                 }
    //                 setselectedAppointment(event)
    //             }}
    //             className='flex border-b-[1px] border-black py-2 cursor-pointer'
    //         >
    //             {event.canceled && (
    //                 <p>Cancelada</p>
    //             )}
    //             <span className='text-primary dark:text-primary-light mr-2' >{format(event.start, 'HH:mm')}</span>
    //             <div>
    //                 <p className='inline' >{event.title}</p>
    //                 {
    //                     isSelected && (
    //                         <>
    //                             <p className='text-secondary dark:text-secondary-light' >
    //                                 {
    //                                     event.info.length ? event.info : 'no hay anotaciones'
    //                                 }
    //                             </p>
    //                         </>
    //                     )
    //                 }
    //             </div>
    //         </li>

    //     </>
    // )
    return null
}
