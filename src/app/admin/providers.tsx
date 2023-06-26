'use client'

import { Menu } from '@/components/admin';
import { ToggleTheme } from '@/components/admin/ToggleTheme';
import { ThemeProvider, useTheme } from 'next-themes'
import React, { useEffect, useLayoutEffect, useState } from 'react'

export const Providers = ({ children }: { children: React.ReactNode }) => {

    const [theme, setTheme] = useState('light');

    // useLayoutEffect(() => {

    // if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //     setTheme('dark');
    //     console.log('es dark', window.matchMedia, window.matchMedia('(prefers-color-scheme: dark)'))
    // }

    // const theme = localStorage.getItem('theme');
    // console.log({ theme })
    // if (theme) {
    //     console.log({ theme })
    //     setTheme(theme);
    // }

    // }, []);

    return (
        <ThemeProvider attribute='class' themes={['light', 'dark']} defaultTheme={theme} >
            <div className='fixed bottom-2 right-2 z-30 flex flex-col gap-2' >
                <Menu />
            </div>
            {children}
        </ThemeProvider>
    )
}
