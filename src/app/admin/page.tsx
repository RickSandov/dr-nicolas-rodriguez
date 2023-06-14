import { MyCalendar } from '@/components/admin/Calendar/Calendar';
import { ContactFormsList } from '@/components/pages/admin/ContactFormsList';
import React from 'react'

const Page = async () => {
    const req = await fetch('https://dr-nicolas-rodriguez.vercel.app/api/contact', { next: { revalidate: 10 } });
    const contactFormsArray = await req.json();
    // const req = await fetch('http://localhost:3000/api/contact', { next: { revalidate: 10 } });
    return (
        <div>
            {/* Crear componente */}
            <ContactFormsList contactFormsArray={contactFormsArray} />
            <MyCalendar events={[
                {
                    id: '123',
                    title: 'Ricardo Sandoval',
                    start: new Date('2023-06-14T12:00'),
                    end: new Date('2023-06-14T13:00')
                }
            ]} />
        </div>
    )
}

export default Page