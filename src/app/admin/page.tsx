import { ContactFormsList } from '@/components/pages/admin'
import { ContactFormStatusType, contactFormStatusType } from '@/interfaces';
import { getContactForms } from '@/server/helpers';
import React, { Suspense } from 'react'

const Page = async ({ searchParams }: { searchParams: { [key: string]: string | undefined } }) => {
    const statusSearch = searchParams["status"] || contactFormStatusType.pending;
    const contactFormsArray = await getContactForms(statusSearch as ContactFormStatusType);

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