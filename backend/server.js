const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mock database (in-memory)
let admissions = [];

// API Routes
app.post('/api/admission', (req, res) => {
    const { name, email, phone, department, message } = req.body;

    if (!name || !email || !phone || !department) {
        return res.status(400).json({ error: 'Please provide all required fields.' });
    }

    const newAdmission = {
        id: admissions.length + 1,
        name,
        email,
        phone,
        department,
        message,
        date: new Date()
    };

    admissions.push(newAdmission);
    console.log('New Admission Received:', newAdmission);

    res.status(201).json({
        message: 'Admission request received successfully!',
        data: newAdmission
    });
});

// GET route to view admissions (mostly for debugging)
app.get('/api/admissions', (req, res) => {
    res.json(admissions);
});

app.get('/', (req, res) => {
    res.send('edu.com API is running...');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
