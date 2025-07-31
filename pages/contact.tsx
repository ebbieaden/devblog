// Form and Theme toggle
import React, { useState } from 'react'
import Head from 'next/head'

export default function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // function eventHandling () {}

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.message) {
            setError('All fields are required.'); 
            return;
        }

        console.log('Form data:', form);
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
        setError('');
    };

    return (
        <>
            <Head>
                <title>Contact | Devblog</title>
            </Head>

            {/* <div className='max-w-xl mx-auto p-4 py-8'> */}
                <h1>Contact Us</h1>
                                
                {submitted && <p style={{ color: 'green' }}>Message sent successfully!</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px'}}>
                    <div>
                        <label>Name:</label>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label>Email</label>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label>Message</label>
                        <textarea
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            rows={5}
                            required
                        />
                    </div>

                    <button
                        type='submit'
                    >
                        Send
                    </button>
                </form>
            {/* </div> */}
        </>
    );

}