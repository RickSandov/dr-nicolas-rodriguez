import { ContactFormsList } from '@/components/pages/admin'
import { contactFormStatusType } from '@/interfaces';
import { getContactForms } from '@/server/helpers';
import React, { Suspense } from 'react'

const Page = async () => {
    const contactFormsArray = await getContactForms(contactFormStatusType.pending);

    return (
        <>
            <Suspense>
                <ContactFormsList contactFormsArray={contactFormsArray} />
            </Suspense>
        </>
    )
}

export const revalidate = 60;

export default Page