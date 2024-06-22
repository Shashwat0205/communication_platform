const Postmark = require('postmark');
const { postmarkToken } = require('../config/keys');

const client = new Postmark.ServerClient(postmarkToken);

module.exports = {
    sendEmail: async (to, subject, body) => {
        return client.sendEmail({
            "From": "your-email@example.com",
            "To": to,
            "Subject": subject,
            "TextBody": body
        });
    }
};
