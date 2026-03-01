import { useState, useEffect } from 'react';

/**
 * useTheme — manages dark/light mode with localStorage persistence.
 */
export function useTheme() {
    const [isDark, setIsDark] = useState(() => {
        const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
        if (stored) return stored === 'dark';
        return typeof window !== 'undefined'
            ? window.matchMedia('(prefers-color-scheme: dark)').matches
            : false;
    });

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    const toggle = () => setIsDark((prev) => !prev);
    return { isDark, toggle };
}
