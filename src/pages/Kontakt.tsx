import React from 'react';
import { Typography } from '@mui/material';
import { ContactForm } from '../components/ContactForm';

export const Kontakt = () => {  
    return (
        <div className='image-contact mt-[-61px] pt-[61px] pb-[64px]'>
            <div className='flex content-center mt-[64px] justify-center flex-col items-center'>
                <Typography variant='h2' className='p-[64px]'>Kontakt</Typography>
                <Typography variant='h4'>email: meyer.aleks@gmail.com</Typography>
            </div>
            <ContactForm />
        </div>
    )
}