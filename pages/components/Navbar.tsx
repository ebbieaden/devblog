import Link from 'next/link';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Navbar() {
    const { darkMode, toggleTheme } = useContext(ThemeContext);

    return(
        <nav style={{ background: '#222', padding: '1rem', color: '#fff' }}>
            <Link href="/" style={{marginRight: '1rem', color: '#fff'}}>Home</Link>
            <Link href="/about" style={{marginRight: '1rem', color: '#fff'}}>About</Link>
            <Link href="/contact" style={{marginRight: '1rem', color: '#fff'}}>Contact</Link>
            
            {/* <div className='space-x-4'>
                <Link href="/" className='hover:underline'>Home</Link>
                <Link href="/about" className='hover:underline'>About</Link>
                <Link href="/contact" className='hover:underline'>Contact</Link>
             </div>*/}
            <button onClick={toggleTheme} style={{ float: 'right', color: '#fff', background: 'none', border: '1px solid #fff', padding: '0.25rem 1rem'}}>
                {darkMode ? '✨ Light' : '🌙 Dark'}
            </button> 
        </nav>
    );
}