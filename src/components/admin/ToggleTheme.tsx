'use client'

import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes';
export const ToggleTheme = () => {

    const { theme, setTheme } = useTheme();

    return (
        <button onClick={() => {
            const newTheme = theme === 'light' ? 'dark' : 'light'
            setTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        }} className='transition-all w-11 h-11 p-1 rounded-full flex items-center justify-center bg-white dark:bg-secondary dark:text-white ml-auto'>

            {
                theme === 'dark' ? (
                    <MoonIcon />
                ) :
                    (
                        <SunIcon />
                    )
            }
        </button>
    )
}