const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { jwtSecret } = require('../config/keys');

// @route  GET api/auth/google
// @desc   Authenticate with Google
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// @route  GET api/auth/google/callback
// @desc   Google auth callback
router.get('/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
    const payload = {
        id: req.user.id,
        email: req.user.email,
        name: req.user.name
    };

    jwt.sign(payload, jwtSecret, { expiresIn: '1h' }, (err, token) => {
        if (err) throw err;
        res.redirect(`http://localhost:3000/dashboard?token=${token}`);
    });
});

module.exports = router;
