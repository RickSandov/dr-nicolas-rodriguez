'use client'

import { ContactFormCard } from '@/components/admin'
import CreateAppointmentFromContactForm from '@/components/admin/CreateAppointment'
import { Modal } from '@/components/modal/Modal'
import { IParsedContactForm } from '@/interfaces'
import React, { useEffect, useState } from 'react'

export const ContactFormsList = ({ contactFormsArray }: { contactFormsArray: IParsedContactForm[] }) => {

    const [activeFormCard, setActiveFormCard] = useState<null | IParsedContactForm>(null);

    const [forms, setForms] = useState(contactFormsArray);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contact`)
            .then(res => res.json()).then(data => {
                setForms(data)
            })
    }, [])

    // console.log(isSameDay(new Date(`2023-06-16T07:36`), new Date(`2023-06-16T07:37`)))
    // console.log(format(new Date(`2023-06-16T07:37`), 'HH:mm:ss'))
    return (
        <>
            <ul className='list-none py-7 max-w-[95%] mx-auto grid grid-cols-auto-fill grid-rows-22 gap-4 ' >
                {
                    forms.map((item, i) => (
                        <ContactFormCard {...item} key={i} onClick={() => setActiveFormCard(item)} />
                    ))
                }
            </ul>
            <Modal isActive={!!activeFormCard} onClose={() => setActiveFormCard(null)} title='Agendar cita' >
                {!!activeFormCard && <CreateAppointmentFromContactForm info={activeFormCard} />}
            </Modal>
        </>
    )
}
