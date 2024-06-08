const express = require('express');
const Astrologer = require('../models/astrologer');
const User = require('../models/user');
const distributeUsers = require('../algorithm/flowDistribution');

const router = express.Router();

let astrologers = [];
let users = [];

// Add sample astrologers
for (let i = 1; i <= 10; i++) {
    astrologers.push(new Astrologer(`Astrologer ${i}`, i <= 3)); // First 3 are top astrologers
}

// List all astrologers
router.get('/astrologers', (req, res) => {
    res.json(astrologers);
});

// Toggle top astrologer status
router.post('/toggleTopAstrologer/:id', (req, res) => {
    const id = req.params.id;
    const astrologer = astrologers.find(a => a.id === id);
    if (astrologer) {
        astrologer.isTopAstrologer = !astrologer.isTopAstrologer;
        res.json(astrologer);
    } else {
        res.status(404).json({ message: 'Astrologer not found' });
    }
});

// Add users and distribute
router.post('/distributeUsers', (req, res) => {
    const userCount = req.body.userCount || 0;
    users = Array.from({ length: userCount }, (_, i) => new User(`User ${i + 1}`));

    const updatedAstrologers = distributeUsers(users, astrologers);
    res.json(updatedAstrologers);
});

// Get all users (optional for debugging)
router.get('/users', (req, res) => {
    res.json(users);
});

module.exports = router;
