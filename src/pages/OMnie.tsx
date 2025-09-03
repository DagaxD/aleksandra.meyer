import React from 'react';
import { Button, Typography } from '@mui/material';
import { ChooseMe } from '../components/ChooseMe';
import { TryMe } from '../components/TryMe';

export const OMnie = () => {
    return (
        <>
        <div className='image-about mt-[-61px] pt-[61px] pb-[64px]'>
            <div className='mx-[64px] mt-[100px] max-w-[700px] flex flex-col gap-[20px] bg-opacity rounded-lg p-[24px] mob-mx-30'>
                <Typography variant='h4'>O Mnie</Typography>
                <Typography variant='h6'>Jestem nauczycielem języków obcych z wieloletnim doświadczeniem w nauczaniu.</Typography>
                 <Typography variant='h6'>Specjalizuję się w nauczaniu języka angielskiego, niemieckiego i włoskiego.</Typography>
                 <Typography variant='h6'>Moje podejście do nauki jest indywidualne i dostosowane do potrzeb każdego ucznia.</Typography>
            </div>
        </div>
        <ChooseMe />
        <TryMe />

        </>
        
    );
}