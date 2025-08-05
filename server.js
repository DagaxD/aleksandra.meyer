require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint do wysyłania e-maili
app.post('/send-email', async (req, res) => {
    const { name, email, message, phone, language} = req.body;

    // Konfiguracja transportera Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Możesz użyć innego dostawcy, np. Outlook
        auth: {
            user: process.env.EMAIL_USER, // Twój e-mail
            pass: process.env.EMAIL_PASS, // Hasło lub App Password
        },
    });

    // Konfiguracja wiadomości e-mail
    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, // Twój e-mail, na który chcesz otrzymywać wiadomości
        subject: `Nowa wiadomość od ${name}`,
        text: `
                Imię: ${name}
                Email: ${email}
                Telefon: ${phone}
                Język: ${language}

                Wiadomość:
                ${message}
            `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Wiadomość została wysłana!');
    } catch (error) {
        console.error('Błąd podczas wysyłania wiadomości:', error);
        res.status(500).send('Wystąpił błąd podczas wysyłania wiadomości.');
    }
});

// Uruchomienie serwera
app.listen(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`);
});