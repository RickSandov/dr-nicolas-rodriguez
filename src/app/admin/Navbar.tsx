import { ToggleTheme } from '@/components/admin/ToggleTheme'
import React from 'react'

export const Navbar = () => {
    return (
        <div className='w-full py-2 px-3 bg-secondary dark:bg-primary flex justify-end' >
            <ToggleTheme />
        </div>
    )
}
