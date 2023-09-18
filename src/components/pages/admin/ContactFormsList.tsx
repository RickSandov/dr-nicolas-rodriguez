'use client'

import { api } from '@/api'
import { ContactFormCard } from '@/components/admin'
import CreateAppointmentFromContactForm from '@/components/admin/CreateAppointment'
import Button from '@/components/button/Button'
import { MagnifyIcon } from '@/components/icons'
import { Modal } from '@/components/modal/Modal'
import { ContactFormStatusType, IParsedContactForm, contactFormStatusType, contactFormStatusTypeArray } from '@/interfaces'
import React, { FC, useEffect, useMemo, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

interface Props { contactFormsArray: IParsedContactForm[] }
export const ContactFormsList: FC<Props> = ({ contactFormsArray }) => {

    const [activeFormCard, setActiveFormCard] = useState<null | IParsedContactForm>(null);
    const [allForms, setAllForms] = useState(contactFormsArray);
    const [forms, setForms] = useState(contactFormsArray);
    const [isLoading, setIsLoading] = useState(false);
    const searchParams = useSearchParams();
    const router = useRouter();

    const statusQuery = useMemo(() => searchParams.get('status') || contactFormStatusType.pending, [searchParams.get('status')]);

    useEffect(() => {
        setIsLoading(true);
        api.get('/contact?status=' + statusQuery).then(({ data }) => {
            setAllForms(data);
            setForms(data);
            setIsLoading(false);
        });
    }, [statusQuery, statusQuery]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            return setForms(allForms);
        }
        setForms(allForms.filter(form => form.name.toLowerCase().includes(e.target.value.toLowerCase())));
    }

    return (
        <>
            <Button
                className='block mt-2 ml-auto mr-2 text-white bg-primary'
                onClick={() => setActiveFormCard({
                    _id: '',
                    message: '',
                    name: '',
                    phoneNumber: '',
                    receivedAt: '',
                    status: contactFormStatusType.success,
                })} >
                Nueva consulta
            </Button>
            <div className={`w-full flex flex-wrap my-7 gap-3 justify-center`}>
                {contactFormStatusTypeArray.map(status => (
                    <Button key={status}
                        className={`rounded-full border-2 border-primary dark:bg-white hover:translate-y-0 hover:text-white dark:hover:bg-secondary-light dark:hover:text-primary ${status === statusQuery ? 'bg-secondary dark:bg-secondary text-white border-secondary' : ''}`}
                        onClick={() => {
                            // setStatusQuery(status);
                            router.push('/admin?status=' + status);
                        }}
                    >
                        {status}
                    </Button>
                ))}
            </div>
            <div className='flex items-center justify-end w-full px-2' >
                <input
                    className='px-3 py-1 text-black border-2 rounded-full border-primary dark:bg-white'
                    placeholder='Buscar'
                    onChange={handleSearch} />
                <div className='absolute w-8 p-1 right-3' >
                    <MagnifyIcon />
                </div>
            </div>

            {
                isLoading ? (
                    <div className='mt-16 text-center'> Buscando...</div>
                ) : forms.length ? (
                    <ul className='list-none py-7 max-w-[95%] mx-auto grid grid-cols-auto-fill grid-rows-22 gap-4 ' >
                        {
                            forms.map((item, i) => (
                                <ContactFormCard {...item} key={i} onClick={() => setActiveFormCard(item)} changeFilter={() => {
                                    // setStatusQuery();
                                }} />
                            ))
                        }
                    </ul>
                ) : <div className='mt-16 text-center'> No hay información</div>
            }
            <Modal isActive={!!activeFormCard} onClose={() => setActiveFormCard(null)} title='Agendar consulta' className='h-[70vh]' >
                {!!activeFormCard && <CreateAppointmentFromContactForm onClose={() => {
                    // setStatusQuery(contactFormStatusType.success)
                    setActiveFormCard(null)
                }} info={activeFormCard} />}
            </Modal>
        </>
    )
}
