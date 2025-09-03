import React from 'react';
import { Button, Typography } from '@mui/material';
import { ForWho } from '../components/ForWho';
import { ChooseMe } from '../components/ChooseMe';
import { useLanguageChanger } from '../hooks/useLanguageChanger';
import TypingEffect from '../components/TypingEffect';
import { TryMe } from '../components/TryMe';

export const Home = () => {
    const language = useLanguageChanger();

    return (
        <>
               <div className='image-people mt-[-61px] pt-[61px] gradient-bg bg-[#f4f1e8] pb-[64px] mob-px-[30px]'>
                 <TypingEffect />
                 <div className='mt-[64px] bg-opacity '>
                   <Typography variant='h3' style={{ fontFamily: "Mulish"}} className="text-[#5a2a82] text-center">
                     Nauczę Cię języka 
                     <div className='text-animation-center'>
                     <span className="rainbow-text px-[12px]">{language}</span>
                     </div>
                     <br/>z dojazdem lub online
                   </Typography>
       
                   <Typography variant='h5' style={{ fontFamily: "Mulish"}} className='text-center mx-4 pt-[5px] pb-[12px]'>
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
               <div className='text-center mt-[64px] mb-[64px] mob-px-[30px]'>
                    <Typography variant='h3' className='!mb-[64px]'>
                    🚗 Zajęcia z dojazdem
                    </Typography>
                    <div className="bg-[#f6f2f9] p-[24px] shadow-md rounded-[12px] hover:bg-[#e3d6ee] max-w-[900px] mx-auto">
                        <Typography variant='h6' className='flex flex-col gap-[20px]'>
                            <div>
                                Prowadzę lekcje z dojazdem na terenie Szczecina
                            </div>
                            <div>
                                Możliwość zajęć również online
                            </div>
                            <div>
                                Nie tracisz czasu na dojazdy – to ja przyjeżdżam do Ciebie!
                            </div>
                        </Typography>
                    </div>
               </div>
               <div className='text-center mt-[64px] mb-[64px] mob-px-[30px]'>
                    <Typography variant='h3' className='!mb-[64px]'>
                    Cennik
                    </Typography>
                    <Typography variant='h5' className='!pb-[24px] text-[#5a2a82]'>
                        Godzina zajęć to koszt już od 80 zł
                    </Typography>
                    <Typography variant='h6'>Ceny zajęć są ustalane indywidualnie, w zależności od wybranego języka, formy zajęć (online lub z dojazdem), a także czynników takich jak:
                        <div className='mt-[24px]'>
                        – czy jesteś stałym uczniem,
                        </div>
                        <div className='mt-[24px] mb-[24px]'>
                        – czy trafiłeś/-aś do mnie z polecenia,
                        </div>
                        <div className='mb-[24px]'>
                        – czy wybierasz pakiet kilku lekcji.
                        </div>
                        Wybierz poniżej, jaka forma zajęć Cię interesuje, aby poznać szczegóły:
                    </Typography>
                    <div className='mt-[24px] flex gap-[24px] justify-center flex-wrap'>
                        <Button variant='contained' color='secondary' href='/z-dojazdem#cennik' size='large' className='!mb-[64px] mt-[24px] mob-mb-[24px]'>
                            Zajęcia z dojazdem do ucznia
                        </Button>
                        <Button variant='contained' color='secondary' href='/online#cennik' size='large' className='!mb-[64px]'>
                            Zajęcia online
                        </Button>
                    </div>
                </div>
                <TryMe />
               </>
    );
}