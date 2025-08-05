import React, { useState } from 'react';
import { Typography, Button, TextField } from '@mui/material';
import axios from 'axios';

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/send-email', formData);
            alert(response.data);
        } catch (error) {
            console.error('Błąd podczas wysyłania wiadomości:', error);
            alert('Wystąpił błąd podczas wysyłania wiadomości.');
        }
    };

    return (
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
    );
}