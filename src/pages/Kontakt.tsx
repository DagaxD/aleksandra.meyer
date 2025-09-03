import React from 'react';
import { Typography } from '@mui/material';
import { ContactForm } from '../components/ContactForm';
import { useLocation } from 'react-router-dom';

export const Kontakt = () => {
    const location = useLocation();
    const state = location.state as {
        language?: string;
        type?: 'single' | 'package';
        online?: boolean;
        purpose?: 'lesson' | 'translation';
    };

    const isTranslation = state?.purpose === 'translation';

    return (
        <>
            <div className='image-contact mt-[-61px] pt-[61px] pb-[64px] mb-[64px]'>
                <div className='flex content-center justify-center flex-col items-center mt-[64px] mb-[24px] mob-px-[30px]'>
                    {isTranslation ? (
                        <>
                            <Typography variant='h4' className='mob-text-center'>Potrzebujesz tłumaczenia?</Typography>
                            <Typography variant='h5' className='p-[24px]'>Wypełnij formularz, aby otrzymać wycenę:</Typography>
                        </>
                    ) : (
                        <>
                            <Typography variant='h4' className='mob-text-center'>Chcesz się umówić na zajęcia?</Typography>
                            <Typography variant='h5' className='p-[24px]'>Wypełnij formularz:</Typography>
                        </>
                    )}
                </div>

                <ContactForm
                    language={state?.language}
                    type={state?.type}
                    online={state?.online}
                    purpose={state?.purpose}
                />
            </div>

            <div className='mt-[64px] mb-[64px] mob-px-[30px]'>
                <Typography variant='h4' className='flex content-center justify-center p-[24px]'>Lub</Typography>
                <Typography variant='h5' className='flex content-center justify-center mob-text-center'>
                    napisz do mnie: <a href="mailto:meyer.aleks@gmail.com" className='ml-[12px]'>meyer.aleks@gmail.com</a>
                </Typography>
            </div>
        </>
    );
};
