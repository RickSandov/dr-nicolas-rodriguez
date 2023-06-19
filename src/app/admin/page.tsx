import { MyCalendar } from '@/components/admin/Calendar/Calendar';
import React, { Suspense } from 'react'

const Page = async () => {
    // const req = await fetch('https://dr-nicolas-rodriguez.vercel.app/api/contact', { next: { revalidate: 10 } });
    // const contactFormsArray = await req.json();
    // const contactFormsArray = await getContactForms();

    return (
        <>
            {/* Crear componente */}
            <Suspense>
                <MyCalendar events={[
                    {
                        id: '123',
                        title: 'Ricardo Sandoval',
                        start: new Date('2023-06-14T12:00'),
                        end: new Date('2023-06-14T13:00'),
                        info: ''
                    },
                    {
                        id: '12',
                        title: 'Jorge Rodriguez',
                        start: new Date('2023-06-22T14:00'),
                        end: new Date('2023-06-22T14:30'),
                        info: ''
                    },
                    {
                        id: '23',
                        title: 'Carla Ontiveros',
                        start: new Date('2023-06-22T14:30'),
                        end: new Date('2023-06-22T15:00'),
                        info: 'Cita para colposcopía'
                    },
                    {
                        id: '13',
                        title: 'Diega Nevarez',
                        start: new Date('2023-06-22T16:00'),
                        end: new Date('2023-06-22T16:30'),
                        info: ''
                    },
                    {
                        id: '3',
                        title: 'Ricardo Sandoval',
                        start: new Date('2023-06-23T12:00'),
                        end: new Date('2023-06-23T12:30'),
                        info: ''
                    },

                ]} />
            </Suspense>
        </>
    )
}

export default Page;