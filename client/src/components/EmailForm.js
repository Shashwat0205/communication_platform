import React, { useState } from 'react';
import axios from 'axios';

const EmailForm = () => {
    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        const newEmail = { to, subject, body };

        try {
            await axios.post('/api/emails', newEmail);
            alert('Email sent successfully');
            setTo('');
            setSubject('');
            setBody('');
        } catch (err) {
            console.error(err.message);
            alert('Failed to send email');
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>To:</label>
                <input
                    type="email"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Subject:</label>
                <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Body:</label>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                ></textarea>
            </div>
            <button type="submit">Send Email</button>
        </form>
    );
};

export default EmailForm;
