import { Hero, Services, ContactSection, Location } from '@/components'
import React from 'react'
import { FabIcons } from '../fabs'
import { DrSection } from '../drSection'
import { Footer } from '../footer/Footer'

export const HomePage = () => {
    return (
        <>
            <Hero />
            <DrSection />
            <Services />
            <Location />
            <ContactSection />
            <FabIcons />
            <Footer />
        </>
    )
}
