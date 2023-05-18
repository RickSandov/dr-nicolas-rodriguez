import { Hero, Services, ContactSection, Location } from '@/components'
import React from 'react'
import { FabIcons } from '../fabs'

export const HomePage = () => {
    return (
        <>
            <Hero />
            <Services />
            <Location />
            <ContactSection />
            <FabIcons />
        </>
    )
}
