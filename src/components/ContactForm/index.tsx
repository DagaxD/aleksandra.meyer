import React, { useState } from 'react';
import { Typography, Button, TextField, MenuItem } from '@mui/material';
import axios from 'axios';

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        phone: '',
        language: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://aleksandra-meyer.onrender.com/send-email', formData);
            alert(response.data);
        } catch (error) {
            console.error('Błąd podczas wysyłania wiadomości:', error);
            alert('Wystąpił błąd podczas wysyłania wiadomości.');
        }
    };

    return (
        <div className='flex flex-col items-center justify-center'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-[16px] w-[300px]'>
            <TextField
                label="Imię"
                name="name"
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <TextField
                label="E-mail"
                name="email"
                type="email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <TextField
                label="Numer telefonu"
                name="phone"
                type="phone"
                variant="outlined"
                value={formData.phone}
                onChange={handleChange}
            />
            <TextField
                select
                label="Język"
                name="language"
                type="language"
                variant="outlined"
                value={formData.language}
                onChange={handleChange}
                required
            >
                <MenuItem value="">-- Wybierz język --</MenuItem>
                <MenuItem value="Angielski">Angielski</MenuItem>
                <MenuItem value="Niemiecki">Niemiecki</MenuItem>
                <MenuItem value="Włoski">Włoski</MenuItem>
            </TextField>
            <TextField
                label="Wiadomość"
                name="message"
                multiline
                rows={4}
                variant="outlined"
                value={formData.message}
                onChange={handleChange}
                required
            />
            <Button type="submit" variant="contained" color="primary">
                Wyślij
            </Button>
        </form>
    </div>
    );
}