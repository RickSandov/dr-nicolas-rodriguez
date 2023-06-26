// import React from 'react'
// import { Modal } from '../modal/Modal'

// interface Props {
//     events: null |
// }
// export const EventsModal = () => {
//     return (
//         <Modal
//             className='overflow-y-hidden'
//             isActive={!!selectedEvents}
//             onClose={() => {
//                 setSelectedEvents(null)
//             }}
//             title={selectedEvents ? format(selectedEvents?.date, 'EEEE dd-MMM', {
//                 locale: es
//             }) : ''}
//         >
//             {
//                 selectedEvents && (
//                     <>
//                         <ul className='flex flex-col gap-2 pb-4'>
//                             {
//                                 selectedEvents.events.map((event) => {
//                                     const isSelected = selectedAppointment?.id === event.id
//                                     return (
//                                         <>

//                                             <li
//                                                 key={event.id}
//                                                 onClick={() => {
//                                                     if (isSelected) {
//                                                         return setselectedAppointment(null);
//                                                     }
//                                                     setselectedAppointment(event)
//                                                 }}
//                                                 className='flex border-b-[1px] border-black py-2 cursor-pointer'
//                                             >
//                                                 <span className='text-primary dark:text-primary-light mr-2' >{format(event.start, 'HH:mm')}</span>
//                                                 <div>
//                                                     <p className='inline' >{event.title}</p>
//                                                     {
//                                                         isSelected && (
//                                                             <>
//                                                                 <p className='text-secondary dark:text-secondary-light' >
//                                                                     {
//                                                                         event.info.length ? event.info : 'no hay anotaciones'
//                                                                     }
//                                                                 </p>
//                                                             </>
//                                                         )
//                                                     }
//                                                 </div>
//                                             </li>

//                                         </>
//                                     )
//                                 })
//                             }
//                         </ul>
//                     </>

//                 )
//             }
//         </Modal>
//     )
// }
