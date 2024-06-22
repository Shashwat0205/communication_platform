import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmailForm from './EmailForm';
import EmailList from './EmailList';

const Dashboard = () => {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        const fetchEmails = async () => {
            const res = await axios.get('/api/emails');
            setEmails(res.data);
        };
        fetchEmails();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <EmailForm />
            <EmailList emails={emails} />
        </div>
    );
};

export default Dashboard;
