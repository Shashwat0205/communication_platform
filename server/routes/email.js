const express = require('express');
const router = express.Router();
const Postmark = require('postmark');
const { postmarkToken } = require('../config/keys');
const Email = require('../models/Email');
const auth = require('../middleware/auth');

// Initialize Postmark client
const client = new Postmark.ServerClient(postmarkToken);

// @route  GET api/emails
// @desc   Get communication history
// @access Private
router.get('/', auth, async (req, res) => {
    try {
        const emails = await Email.find({ user: req.user.id });
        res.json(emails);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route  POST api/emails
// @desc   Send email via Postmark
// @access Private
router.post('/', auth, async (req, res) => {
    const { to, subject, body } = req.body;

    try {
        // Send email
        await client.sendEmail({
            "From": "your-email@example.com",
            "To": to,
            "Subject": subject,
            "TextBody": body
        });

        // Save email to database
        const newEmail = new Email({
            user: req.user.id,
            to,
            subject,
            body
        });

        const email = await newEmail.save();
        res.json(email);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
