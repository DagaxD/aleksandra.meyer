import React from 'react';
import { Typography } from '@mui/material';
import { ContactForm } from '../components/ContactForm';
import { useLocation } from 'react-router-dom';

export const Kontakt = () => {  
    const location = useLocation();
    const state = location.state as { language: string, type: string, online: boolean };
    console.log(state)
    return (
        <div className='image-contact mt-[-61px] pt-[61px] pb-[64px] mb-[64px]'>
            <div className='flex content-center justify-center flex-col items-center mt-[64px] mb-[24px]'>
                <Typography variant='h4'>Chcesz się umówić na zajęcia?</Typography>
                <Typography variant='h5' className='p-[24px]'>Wypełnij formularz:</Typography>
            </div>
            <ContactForm language={state?.language} type={state?.type} online={state?.online}/>
            <div className='mt-[64px]'>
                <Typography variant='h4' className='flex content-center justify-center p-[24px]'>Lub</Typography>
                <Typography variant='h5' className='flex content-center justify-center'>napisz do mnie: meyer.aleks@gmail.com</Typography>
            </div>
        </div>
    )
}