// // Form and Theme toggle
// import React, { useState } from 'react'
// import Head from 'next/head'

// export default function Contact() {
//     const [form, setForm] = useState({
//         name: '',
//         email: '',
//         message: '',
//     });
//     const [submitted, setSubmitted] = useState(false);
//     const [error, setError] = useState('');

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     // function eventHandling () {}

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();

//         if (!form.name || !form.email || !form.message) {
//             setError('All fields are required.'); 
//             return;
//         }

//         console.log('Form data:', form);
//         setSubmitted(true);
//         setForm({ name: '', email: '', message: '' });
//         setError('');
//     };

//     return (
//         <>
//             <Head>
//                 <title>Contact | Devblog</title>
//             </Head>

//             {/* <div className='max-w-xl mx-auto p-4 py-8'> */}
//                 <h1>Contact Us</h1>
                                
//                 {submitted && <p style={{ color: 'green' }}>Message sent successfully!</p>}
//                 {error && <p style={{ color: 'red' }}>{error}</p>}

//                 <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px'}}>
//                     <div>
//                         <label>Name:</label>
//                         <input
//                             type='text'
//                             name='name'
//                             value={form.name}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>

//                     <div>
//                         <label>Email</label>
//                         <input
//                             type='email'
//                             name='email'
//                             value={form.email}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>

//                     <div>
//                         <label>Message</label>
//                         <textarea
//                             name='message'
//                             value={form.message}
//                             onChange={handleChange}
//                             rows={5}
//                             required
//                         />
//                     </div>

//                     <button
//                         type='submit'
//                     >
//                         Send
//                     </button>
//                 </form>
//             {/* </div> */}
//         </>
//     );

// }

import { useState } from 'react';

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', message: ''});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState<{ success: boolean; message: string} | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setResponse(null);

        console.log('Sending data', form);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            console.log('Response data', data);

            setResponse({ success: data.success, message: data.message || data.error });
        } catch (error) {
            setResponse({ success: false, message: 'Something went wrong.' });
        } finally {
            setLoading(false);
            setForm({ name: '', email: '', message: ''});
        }
    };

    return (
        <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto'}}>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <input
                    type='text'
                    name='name'
                    placeholder='Your name'
                    value={form.name}
                    onChange={handleChange}
                    required
                    style={{ padding: '0.5rem', borderRadius: '4px'}}
                />

                <input
                    type='email'
                    name='email'
                    placeholder='Your email'
                    value={form.email}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name='message'
                    placeholder='Your message'
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    required
                />

                <button type='submit' disabled={loading}>
                    {loading ? 'Sending...' : 'Send'}
                </button>
            </form>

            {response && (
                <p style={{ color: response.success ? 'green' : 'red', marginTop: '1rem'}}>{response.message}</p>
            )}
        </div>
    );
}