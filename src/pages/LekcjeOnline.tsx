import React from 'react';
import { Button, Typography } from '@mui/material';
import PricingSwitcher from '../components/PriceSwitcher';

export const LekcjeOnline = () => {     
    return (
        <>
            <div className='image-online mt-[-61px] pt-[61px] pb-[64px]'>
                <div className='mx-[64px] mob-mx-30 mt-[100px] mob-mt-50 max-w-[700px] flex flex-col gap-[20px] bg-opacity rounded-lg p-[24px]'>
                    <Typography variant='h4'>📚 Indywidualne zajęcia online</Typography>
                    <Typography variant='h6'>Oferuję profesjonalne zajęcia online – bez stresu, bez straty czasu na dojazdy, z każdego miejsca na Ziemi.</Typography>
                    <Typography variant='h6'>Lekcje dla dzieci, młodzieży i dorosłych – dostosowane do Twoich potrzeb i poziomu.</Typography>
                    <Typography variant='h6'>🌍 Oferuję profesjonalne zajęcia z języka:
                        <div>
                            🇬🇧 angielskiego
                        </div>
                        <div>
                            🇩🇪 niemieckiego
                        </div>
                        <div>
                            🇮🇹 włoskiego
                        </div>
    
                    </Typography>
                    <Typography variant='h6'>Zajęcia prowadzę przez aplikację Teams.</Typography>
    
                </div>
            </div>
            <section id="cennik">
                <div>
                    <PricingSwitcher
                        engHour="od 80 zł"
                        engPack="od 750 zł"
                        gerHour="od 85 zł"
                        gerPack="od 790 zł"
                        itaHour="od 90 zł"
                        itaPack="od 820 zł"
                        titleText='Cennik zajęć online'
                        online={true}
                    />

                </div>
                <div className='text-center mb-[64px] ml-[100px] mr-[100px] mob-mx-30'>
                    <Typography variant='h6' className='text-left mt-[24px]'>
                        Ceny zajęć są ustalane indywidualnie, w zależności od wybranego języka, formy zajęć (online lub z dojazdem), a także czynników takich jak:
                        <ul className='list-disc list-inside'>
                            <li>częstotliwość zajęć</li>
                            <li>poziom zajęć</li>
                            <li>czy jesteś z polecenia</li>
                            <li>czy jesteś stałym klientem</li>
                        </ul>
                    </Typography>
                    <Button variant='contained' color='secondary' className='mt-[24px]' href='/z-dojazdem#cennik'>
                        Sprawdź cennik zajęć z dojazdem
                    </Button>
                </div>
            </section>
        </>
    )
}