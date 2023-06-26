import { ToggleTheme } from '@/components/admin/ToggleTheme'
import React from 'react'

export const Navbar = () => {
    return (
        <div className='fixed top-0 w-full py-2 px-3 bg-secondary dark:bg-primary flex justify-end shadow-b-dark z-30' >
            <ToggleTheme />
        </div>
    )
}
