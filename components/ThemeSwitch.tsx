"use client";

import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ModeNight, LightMode } from '@mui/icons-material'

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        const localTheme = localStorage.getItem('theme')
        if (localTheme) {
            setTheme(localTheme)
        } else {
            setTheme('dark')
        }
        setMounted(true)
    }, [setTheme])

    if (!mounted) return null

    return (
        <div>
            <Button
                variant='light'
                isIconOnly
                onClick={() => {
                    if (theme === 'light') {
                        setTheme('dark')
                        localStorage.setItem('theme', 'dark')
                    } else {
                        setTheme('light')
                        localStorage.setItem('theme', 'light')
                    }
                }}
            >
                {theme === 'light' ? <ModeNight /> : <LightMode />}
            </Button>
        </div>
    )
};