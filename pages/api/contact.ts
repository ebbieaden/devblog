import type { NextApiRequest, NextApiResponse } from "next";

interface ContactForm {
    name: string;
    email: string;
    message: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body as ContactForm;

        console.log('Incoming data to contact/post');
        console.log('Form data', { name, email, message });
        
        if (!name || !email || !message) {
            return res.status(400).json({ success: false, error: 'All fields are required'});
        }

        console.log('Form received', { name, email, message });

        return res.status(200).json({ success: true, message: 'Message sent successfully!'});
    }

    return res.status(405).json({ success: false, error: 'Method not allowed' });
}