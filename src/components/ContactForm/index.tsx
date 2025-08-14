import React, { useState } from 'react';
import { Button, TextField, MenuItem, CircularProgress } from '@mui/material';
import axios, { AxiosError } from 'axios';

type ContactProps = {
    language?: string;
    type?: string;
    online?: boolean;
}

export const ContactForm = ({language, type, online}: ContactProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        phone: '',
        language: language || '',
        type: type || '',
        version: online === true ? 'online' : online === false ? 'offline' : ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post('https://aleksandra-meyer.onrender.com/send-email', formData);
            alert(response.data);
        } catch (error) {
            const axiosError = error as AxiosError;
            console.error('Błąd podczas wysyłania wiadomości:', error);
            alert(`Wystąpił błąd podczas wysyłania wiadomości: ${axiosError.response?.data || 'Nieznany błąd.'} `);
        } finally {
            setIsLoading(false);
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
                select
                label="Typ zajęć"
                name="type"
                type="type"
                variant="outlined"
                value={formData.type}
                onChange={handleChange}
                required
            >
                <MenuItem value="">-- Wybierz typ zajęć --</MenuItem>
                <MenuItem value="single">Zajęcia 60min</MenuItem>
                <MenuItem value="package">Pakiet 10 zajęć</MenuItem>
            </TextField>
            <TextField
                select
                label="Rodzaj zajęć"
                name="version"
                type="version"
                variant="outlined"
                value={formData.version}
                onChange={handleChange}
                required
            >
                <MenuItem value="">-- Wybierz rodzaj zajęć --</MenuItem>
                <MenuItem value="online">Online</MenuItem>
                <MenuItem value="offline">Z dojazdem</MenuItem>
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
            <Button 
                type="submit"
                 variant="contained" 
                 color="secondary"
                 disabled={isLoading}
                >
                {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Wyślij'}
            </Button>
        </form>
    </div>
    );
}