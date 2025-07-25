import Link from 'next/link';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Navbar() {
    const { darkMode, toggleTheme } = useContext(ThemeContext);

    return(
        <nav className='bg-gray-100 dark:bg-gray-900 px-4 py-3 text-gray-900 dark:text-white flex justify-between items-center'>
            <div className='space-x-4'>
                <Link href="/" className='hover:underline'>Home</Link>
                <Link href="/about" className='hover:underline'>About</Link>
                <Link href="/contact" className='hover:underline'>Contact</Link>
            </div>
            <button onClick={toggleTheme} className='bg-gray-200 dark:bg-gray-200 px-3 py-1 rounded'>
                {darkMode ? '✨ Light' : '🌙 Dark'}
            </button>
        </nav>
    );
}