import { Button, Typography } from "@mui/material";
import React from "react";

export const TryMe = () => {
    return (
        <div className='text-center mt-[64px] mb-[64px] mob-px-[30px]'>
            <Typography variant='h3' className='!mb-[64px]'>
                Zacznij już dziś!
            </Typography>
            <div className='flex flex-row gap-[24px] justify-center flex-wrap bg-[#f6f2f9] p-[24px] shadow-md rounded-[12px] max-w-[900px] mx-auto items-center'>
                <div className='max-w-[500px] text-left'>
                    <Typography variant='h6' className=' text-[#5a2a82]'>
                        Zrób pierwszy krok – umów się na zajęcia próbne i przekonaj się, jak skuteczna może być nauka języków w komfortowych warunkach.
                    </Typography>
                </div>
                <div className="border text-[#5a2a82] h-[100px] mob-hide" />
                <div className='justify-center items-center flex'>
                    <Button variant='contained' color='secondary' href='/kontakt' size='large'>
                        Umów się na zajęcia próbne
                    </Button>
                </div>
            </div>
        </div>
    );
}