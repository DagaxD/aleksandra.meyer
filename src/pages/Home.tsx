import React from 'react';
import { Typography } from '@mui/material';
import { ForWho } from '../components/ForWho';
import { ChooseMe } from '../components/ChooseMe';
import { useLanguageChanger } from '../hooks/useLanguageChanger';
import TypingEffect from '../components/TypingEffect';

export const Home = () => {
    const language = useLanguageChanger();

    return (
        <>
               <div className='image-people mt-[-61px] pt-[61px] gradient-bg bg-[#f4f1e8] pb-[64px]'>
                 <TypingEffect />
                 <div className='mt-[64px] bg-opacity '>
                   <Typography variant='h3' style={{ fontFamily: "Mulish"}} className="text-[#5a2a82] text-center">
                     Nauczę Cię języka 
                     <div className='text-animation-center'>
                     <span className="rainbow-text px-[12px]">{language}</span>
                     </div>
                     <br/>z dojazdem lub online
                   </Typography>
       
                   <Typography variant='h5' style={{ fontFamily: "Mulish"}} className='text-center mx-4 pt-[12px]'>
                       Ze mną nauka języków to pestka
                   </Typography>
                 </div>
               </div>
               <div>
                 <ForWho />
               </div>
               <div>
                 <ChooseMe />
               </div>
               </>
    );
}