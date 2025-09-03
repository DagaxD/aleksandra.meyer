import React from 'react';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const Tlumaczenia = () => {
    return (
        <>
            <div className='image-tlumaczenia mt-[-61px] pt-[61px] pb-[64px]'>
                <div className='mx-[64px] mob-mx-30 mt-[100px] mob-mt-50 max-w-[800px] flex flex-col gap-[20px] bg-opacity rounded-lg p-[24px]'>
                    <Typography variant='h4'>Tłumaczenia pisemne</Typography>

                    <Typography variant='h6'>
                        Oferuję profesjonalne tłumaczenia dokumentów i tekstów w językach:
                        <ul className='list-disc list-inside mt-[10px]'>
                            <li>🇬🇧 angielski</li>
                            <li>🇩🇪 niemiecki</li>
                            <li>🇮🇹 włoski</li>
                        </ul>
                    </Typography>

                    <Typography variant='h6'>
                        Tłumaczę m.in.:
                        <ul className='list-disc list-inside mt-[10px]'>
                            <li>umowy, CV, dokumenty urzędowe</li>
                            <li>teksty specjalistyczne (medyczne, prawnicze, techniczne)</li>
                            <li>korespondencję biznesową i prywatną</li>
                            <li>strony internetowe i materiały marketingowe</li>
                        </ul>
                    </Typography>

                    <Typography variant='h6'>
                        Każde zlecenie wyceniam indywidualnie, biorąc pod uwagę:
                        <ul className='list-disc list-inside mt-[10px]'>
                            <li>długość i rodzaj tekstu</li>
                            <li>język źródłowy i docelowy</li>
                            <li>termin realizacji</li>
                            <li>ewentualne formatowanie</li>
                        </ul>
                    </Typography>

                    <Typography variant='h6'>
                        Współpracuję zarówno z klientami indywidualnymi, jak i firmami. Możliwa stała współpraca.
                    </Typography>

                </div>
            </div>

            <section id="cennik">
                <div className='flex  mt-[100px] justify-center items-center mb-[64px]'>
                    <div className='text-center ml-[100px] mr-[100px] mob-mx-30'>
                        <Typography variant='h5' className='text-left mt-[24px]'>Przykładowy cennik</Typography>
                        <Typography variant='h6' className='text-left mt-[10px]'>
                            Ceny orientacyjne:
                            <ul className='list-disc list-inside mt-[10px]'>
                                <li>Tłumaczenie zwykłe: od 45 zł / 1800 znaków ze spacjami</li>
                                <li>Tłumaczenie specjalistyczne: od 60 zł / 1800 znaków</li>
                                <li>Tłumaczenie przysięgłe: od 70 zł / 1125 znaków</li>
                            </ul>
                        </Typography>
                        <Typography variant='body1' className='text-left mt-[10px] italic'>
                            Skontaktuj się, aby otrzymać indywidualną wycenę i termin realizacji.
                        </Typography>
                    </div>
                    <div>
                        <Link to="/kontakt" state={{ purpose: 'translation'}}>
                            <Button variant="contained" color="secondary">
                                Skontaktuj się w sprawie tłumaczenia
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};
