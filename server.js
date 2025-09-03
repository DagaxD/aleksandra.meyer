require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const sanitizeHtml = require('sanitize-html');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

const sanitize = (input) => {
    return sanitizeHtml(input, {
        allowedTags: [],
        allowedAttributes: {}
    }).trim();
};


// Endpoint do wysyłania e-maili
app.post('/send-email', async (req, res) => {
    let { name, email, message, phone, language, type, version, purpose, targetLanguage, documentType} = req.body;

     // Sanityzacja
     name = sanitize(name);
     email = sanitize(email);
     message = sanitize(message);
     phone = sanitize(phone);
     language = sanitize(language);
     type = sanitize(type);
     version = sanitize(version);
     purpose = sanitize(purpose);
     targetLanguage = sanitize(targetLanguage);
     documentType = sanitize(documentType);

      // Walidacja pól
    if (!name || !email || !message) {
        return res.status(400).send('Imię, e-mail oraz wiadomość są wymagane.');
    }
    if (purpose !== 'translation') {
        if (!type || !version) {
            return res.status(400).send('Typ zajęć i rodzaj zajęć są wymagane.');
        }
    } else {
        if (!language || !targetLanguage) {
            return res.status(400).send('Język źródłowy i docelowy są wymagane.');
        }
    }

    if (!email.includes('@')) {
        return res.status(400).send('Nieprawidłowy adres e-mail.');
    }

    if (message.length < 2 || message.length > 1000) {
        return res.status(400).send('Wiadomość musi mieć od 2 do 1000 znaków.');
    }

    if (phone && !/^[0-9+\-\s()]{7,20}$/.test(phone)) {
        return res.status(400).send('Nieprawidłowy numer telefonu.');
    }

    // Konfiguracja transportera Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Możesz użyć innego dostawcy, np. Outlook
        auth: {
            user: process.env.EMAIL_USER, // Twój e-mail
            pass: process.env.EMAIL_PASS, // Hasło lub App Password
        },
    });

    const mailContent = purpose === 'translation' ? `
                Imię: ${name}
                Email: ${email}
                Telefon: ${phone}
                🔹 CEL: Tłumaczenie
                Język źródłowy: ${language}
                Język docelowy: ${targetLanguage}
                Typ dokumentu: ${documentType || 'nie podano'}

                Wiadomość:
                ${message}
    ` 
    : `
                Imię: ${name}
                Email: ${email}
                Telefon: ${phone}
                🔹 CEL: Zajęcia
                Język: ${language}
                Typ zajęć: ${type === 'package' ? 'Pakiet' : 'Pojedyncze zajęcia'}
                Rodzaj zajęć: ${version}

                Wiadomość:
                ${message}
            `
    // Konfiguracja wiadomości e-mail
    const mailOptions = {
        from: email,
        to: process.env.EMAIL_TO, // Twój e-mail, na który chcesz otrzymywać wiadomości
        subject: `Nowa wiadomość od ${name}`,
        text: mailContent,
    };
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Wiadomość została wysłana!');
    } catch (error) {
        console.error('Błąd podczas wysyłania wiadomości:', error);
        res.status(500).send('Wystąpił błąd podczas wysyłania wiadomości:'+ ' ' + error.message);
    }
});

// Uruchomienie serwera
app.listen(PORT, () => {
    console.log(`Serwer działa na porcie: ${PORT}`);
    console.log('🔥 Backend uruchomiony ponownie');
});