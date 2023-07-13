'use client'

import { Menu } from '@/components/admin';
import { ToggleTheme } from '@/components/admin/ToggleTheme';
import { useAppStore } from '@/stores/useAppStore';
import { ThemeProvider, useTheme } from 'next-themes'
import { useRouter } from 'next/navigation';
import React, { useEffect, useLayoutEffect, useState } from 'react'

export const Providers = ({ children }: { children: React.ReactNode }) => {

    const [theme] = useState('light');
    const { user, getUser } = useAppStore();
    const setRouter = useAppStore((state) => state.setRouter);
    const router = useRouter();

    useEffect(() => {
        setRouter(router);
    }, [router])

    useLayoutEffect(() => {
        if (!user) getUser()
    }, [])

    return (
        <ThemeProvider attribute='class' themes={['light', 'dark']} defaultTheme={theme} >
            <div className='fixed bottom-2 right-2 z-30 flex flex-col gap-2' >
                <Menu />
            </div>
            {children}
        </ThemeProvider>
    )
}
