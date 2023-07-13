
import { CalendarPage } from '@/components/admin/Calendar/CalendarPage';
import { getAppointmentsAsEvent } from '@/server/helpers/appointment';
import React, { Suspense } from 'react'


const Page = async () => {
    const events = await getAppointmentsAsEvent();
    return (
        <>
            {/* Crear componente */}
            <Suspense>
                <CalendarPage events={events} />
            </Suspense>
        </>
    )
}

export default Page;