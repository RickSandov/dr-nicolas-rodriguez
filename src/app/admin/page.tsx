import { MyCalendar } from '@/components/admin/Calendar/Calendar';
import { getAppointmentsAsEvent } from '@/server/helpers/appointment';
import React, { Suspense } from 'react'

const Page = async () => {
    const events = await getAppointmentsAsEvent();
    console.log({ events });
    return (
        <>
            {/* Crear componente */}
            <Suspense>
                <MyCalendar events={events} />
            </Suspense>
        </>
    )
}

export default Page;