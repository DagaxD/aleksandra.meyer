import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; // jeśli używasz react-router
import './flipcard.css'; // animacje CSS osobno

interface PricingProps {
  engHour: string;
  engPack: string;
  gerHour: string;
  gerPack: string;
  itaHour: string;
  itaPack: string;
  titleText?: string;
  online?: boolean;
}

const PricingSwitcher: React.FC<PricingProps> = ({
  engHour,
  engPack,
  gerHour,
  gerPack,
  itaHour,
  itaPack,
  titleText,
  online
}) => {
  const [language, setLanguage] = useState<'EN' | 'DE' | 'IT'>('EN');

  const prices = {
    EN: [engHour, engPack],
    DE: [gerHour, gerPack],
    IT: [itaHour, itaPack],
  };

  const titles = ['Zajęcia 60 minut', 'Pakiet 10 zajęć'];

  const languageLabels = {
    EN: 'Angielski',
    DE: 'Niemiecki',
    IT: 'Włoski',
  };

  
  return (
    <div className='text-center mt-[64px]'>
        <Typography variant='h3' className='!mb-[64px]'>
            {titleText || 'Cennik'}
        </Typography>

            <div className="flex flex-col items-center gap-8">
            {/* Switch językowy */}
            <div className="flex gap-4">
                <Button variant={language === 'EN' ? 'contained' : 'outlined'} color="secondary" onClick={() => setLanguage('EN')}>Angielski</Button>
                <Button variant={language === 'DE' ? 'contained' : 'outlined'} color="secondary" onClick={() => setLanguage('DE')}>Niemiecki</Button>
                <Button variant={language === 'IT' ? 'contained' : 'outlined'} color="secondary" onClick={() => setLanguage('IT')}>Włoski</Button>
            </div>

            {/* Kafelki */}
            <div className="flex flex-wrap justify-center gap-[64px] mb-[64px] mt-[64px]">
                {prices[language].map((price, index) => (
                <div key={index} className="flip-card w-[250px] h-[250px]">
                    <div className="flip-card-inner">
                    {/* Przód */}
                    <div className="flip-card-front bg-[#f6f2f9] shadow-lg-strong-top p-6 rounded-lg w-[200px] h-[200px] flex flex-col justify-center items-center text-center">
                        {index === 1 && (
                            <div className="ribbon">Polecam</div>
                        )}

                        <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide rounded-lg bg-[#7a47ac] p-[6px]">
                        język {languageLabels[language]}
                        </p>

                        <h3 className="text-xl font-semibold text-[#5a2a82]">{titles[index]}</h3>
                        <p className="mt-2 text-lg font-bold"> już {price}</p>
                    </div>
                    {/* Tył */}
                    <div className="flip-card-back bg-[#f6f2f9] shadow-lg-strong-top p-6 rounded-lg w-[200px] h-[200px] flex flex-col justify-center items-center text-center">
                        <Typography variant='h6' className="pb-[24px]">Zapisz się już teraz!</Typography>
                        <Link to="/kontakt" state={{ language: languageLabels[language], type: index === 0 ? 'single' : 'package'  , online}}>
                        <Button variant="contained" color="secondary">
                            Zapisz się
                        </Button>
                        </Link>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
    </div>
  );
};

export default PricingSwitcher;
