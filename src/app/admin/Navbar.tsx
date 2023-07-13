'use client'

import { ToggleTheme } from '@/components/admin/ToggleTheme'
import { useAppStore } from '@/stores/useAppStore'
import React from 'react'
import { Profile } from './Profile'

export const Navbar = () => {

    const { user } = useAppStore();

    return (
        <div className='fixed top-0 w-full py-2 px-3 bg-secondary dark:bg-primary flex justify-between items-center shadow-b-dark z-30' >
            {user && (
                <Profile user={user} />
            )}
            <ToggleTheme />
        </div>
    )
}
