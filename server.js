const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Contact form submission
app.post('/contact', async (req, res) => {
    const { name, email, phone, discord, message } = req.body;

    const logMessage = `**Name:** ${name}\n**Email:** ${email}\n**Phone Number:** ${phone}\n**Discord Username:** ${discord}\n**Message:** ${message}\n\n`;

    fs.appendFile(path.join(__dirname, 'contacts.txt'), logMessage, (err) => {
        if (err) {
            return res.status(500).json({ message: 'There was an error submitting your request.' });
        }

        res.json({ message: 'Your request was submitted successfully!' });
    });
});

// Serve static files from 'public' directory
app.use(express.static('public'));

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
