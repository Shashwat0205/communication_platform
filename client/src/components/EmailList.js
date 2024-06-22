import React from 'react';

const EmailList = ({ emails }) => {
    return (
        <div>
            <h2>Communication History</h2>
            <ul>
                {emails.map((email, index) => (
                    <li key={index}>
                        <p><strong>To:</strong> {email.to}</p>
                        <p><strong>Subject:</strong> {email.subject}</p>
                        <p><strong>Body:</strong> {email.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmailList;
