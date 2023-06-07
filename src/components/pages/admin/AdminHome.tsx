import React, { useMemo } from 'react'
import { contactForms, patients } from './data';
import { format } from 'date-fns'
import es from 'date-fns/locale/es'
import { ContactFormCard } from '@/components/admin';
import { IParsedContactForm } from '@/interfaces';

const compareDate = (a: IParsedContactForm, b: IParsedContactForm) => {
    return b.receivedAt.getTime() - a.receivedAt.getTime();
}

export const AdminHome = () => {

    const patientsArray = useMemo(() => patients, []);

    const contactFormsArray = useMemo(() => {
        const items = contactForms.map(({ name, phoneNumber, message, status, receivedAt }) => ({
            name, phoneNumber, message, status,
            receivedAt
        }))
        const sortedItems = items.sort(compareDate);
        return sortedItems;
    }, []);

    return (
        <div>
            {/* Crear componente */}
            <ul className='list-none py-7 px-5 grid grid-cols-auto-fill grid-rows-22 gap-4 ' >
                {
                    contactFormsArray.map((item, i) => (
                        <ContactFormCard {...item} key={i} />
                    ))
                }
            </ul>
        </div>
    )
}