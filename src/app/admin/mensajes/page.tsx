import { ContactFormsList } from '@/components/pages/admin'
import { getContactForms } from '@/server/helpers';
import React, { Suspense } from 'react'

const Page = async () => {
    const contactFormsArray = await getContactForms();
    return (
        <>
            <Suspense>
                <ContactFormsList contactFormsArray={contactFormsArray} />
            </Suspense>
        </>
    )
}

export default Page