import React, { useState } from 'react';
import { Button, TextField, MenuItem, CircularProgress } from '@mui/material';
import axios, { AxiosError } from 'axios';

type ContactProps = {
    language?: string;
    type?: string;
    online?: boolean;
    purpose?: string;
}

export const ContactForm = ({language, type, online, purpose}: ContactProps) => {
    const isTranslation = purpose === 'translation';
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        phone: '',
        language: language || '',
        type: type || '',
        version: online === true ? 'online' : online === false ? 'offline' : '',
        targetLanguage: '', // dla tłumaczeń
        documentType: '', // dla tłumaczeń
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post('https://aleksandra-meyer.onrender.com/send-email', {
                ...formData,
                purpose: purpose || 'lesson',
            });
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
            {isTranslation ? (
                    <>
                        <TextField
                            select
                            label="Język źródłowy"
                            name="language"
                            variant="outlined"
                            value={formData.language}
                            onChange={handleChange}
                            required
                        >
                            <MenuItem value="">-- Wybierz --</MenuItem>
                            <MenuItem value="Polski">Polski</MenuItem>
                            <MenuItem value="Angielski">Angielski</MenuItem>
                            <MenuItem value="Niemiecki">Niemiecki</MenuItem>
                            <MenuItem value="Włoski">Włoski</MenuItem>
                        </TextField>

                        <TextField
                            select
                            label="Język docelowy"
                            name="targetLanguage"
                            variant="outlined"
                            value={formData.targetLanguage}
                            onChange={handleChange}
                            required={isTranslation}
                        >
                            <MenuItem value="">-- Wybierz --</MenuItem>
                            <MenuItem value="Polski">Polski</MenuItem>
                            <MenuItem value="Angielski">Angielski</MenuItem>
                            <MenuItem value="Niemiecki">Niemiecki</MenuItem>
                            <MenuItem value="Włoski">Włoski</MenuItem>
                        </TextField>

                        <TextField
                            select
                            label="Typ dokumentu"
                            name="documentType"
                            variant="outlined"
                            value={formData.documentType}
                            onChange={handleChange}
                        >
                            <MenuItem value="">-- Wybierz --</MenuItem>
                            <MenuItem value="CV">CV</MenuItem>
                            <MenuItem value="Umowa">Umowa</MenuItem>
                            <MenuItem value="Dokument urzędowy">Dokument urzędowy</MenuItem>
                            <MenuItem value="Techniczny">Techniczny</MenuItem>
                            <MenuItem value="Inny">Inny</MenuItem>
                        </TextField>
                    </>
                ) : (
                    <>
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
                required={!isTranslation}
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
                required={!isTranslation}
            >
                <MenuItem value="">-- Wybierz rodzaj zajęć --</MenuItem>
                <MenuItem value="online">Online</MenuItem>
                <MenuItem value="offline">Z dojazdem</MenuItem>
            </TextField>
            </>)}
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