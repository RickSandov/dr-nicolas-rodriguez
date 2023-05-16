import { Hero, Services, ContactSection } from '@/components'
import React from 'react'
import { FabIcons } from '../fabs'

export const HomePage = () => {
    return (
        <>
            <Hero />
            <Services />
            <ContactSection />
            <FabIcons />
        </>
    )
}
