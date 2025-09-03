import { Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";

export const ChooseMe = () => {
    const currentYear = new Date().getFullYear();
    const startYear = 2015; // Rok rozpoczęcia nauczania
    const yearsOfExperience = currentYear - startYear;
  return (
    <div className="p-[64px] pt-[120px] flex flex-col items-center justify-center">
      <Typography variant="h3" className="text-center font-semibold !mb-[64px]">
        Dlaczego warto mnie wybrać?
      </Typography>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3} // Ile slajdów naraz (możesz dać 2-3)
        breakpoints={{
            0: {
              slidesPerView: 1, // mobile: 0–767px
            },
            768: {
              slidesPerView: 3, // md+ (desktop)
            },
          }}
        navigation // Strzałki nawigacyjne
        pagination={{ clickable: true }} // Kropeczki nawigacyjne
        autoplay={{ delay: 3000 }} // Automatyczne przesuwanie co 3 sekundy
        loop // Zapętlenie
        className="w-full ml-[30px] mr-[30px] h-[200px]" // Ograniczenie szerokości
      >
        <SwiperSlide className="bg-white rounded-lg text-center">
            <div className='w-[300px] text-center mx-auto mt-[30px] flex flex-col gap-[20px]'>
                <Typography variant="h5" className="font-semibold">🎯 Indywidualne podejście</Typography>
                <Typography variant="body1">Każdy uczeń otrzymuje plan nauki dopasowany do jego potrzeb i poziomu.</Typography>
            </div>
        </SwiperSlide>

        <SwiperSlide className=" bg-white rounded-lg text-center">
            <div className='w-[300px] text-center mx-auto mt-[30px] flex flex-col gap-[20px]'>
                <Typography variant="h5" className="font-semibold">📍 Dojazd do ucznia</Typography>
                <Typography variant="body1">Nie martw się pogodą -  usiądź wygodnie w domu i poczekaj na lekcję - dojadę, a Ty oszczędzisz czas.</Typography>
            </div>
        </SwiperSlide>

        <SwiperSlide className=" bg-white  rounded-lg text-center">
            <div className='w-[300px] text-center mx-auto mt-[30px] flex flex-col gap-[20px]'>
                <Typography variant="h5" className="font-semibold">📚 Skuteczne metody</Typography>
                <Typography variant="body1">Nowoczesne i sprawdzone techniki nauczania.</Typography>
            </div>
        </SwiperSlide>

        <SwiperSlide className="bg-white  rounded-lg text-center">
            <div className='w-[300px] text-center mx-auto mt-[30px] flex flex-col gap-[20px]'>
                <Typography variant="h5" className="font-semibold">🌍 Praktyczna nauka</Typography>
                <Typography variant="body1">Nie tylko gramatyka – uczę jak używać języka w praktyce.</Typography>
            </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white  rounded-lg text-center">
            <div className='w-[300px] text-center mx-auto mt-[30px] flex flex-col gap-[20px]'>
                <Typography variant="h5" className="font-semibold">🧩 Pomoce dydaktyczne</Typography>
                <Typography variant="body1">Na nasze zajęcia przygotuję pomoce dydaktyczne oraz ksero potrzebnych materiałów.</Typography>
            </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white  rounded-lg text-center">
            <div className='w-[300px] text-center mx-auto mt-[30px] flex flex-col gap-[20px]'>
                <Typography variant="h5" className="font-semibold">📆 {yearsOfExperience} lat doświadczenia</Typography>
                <Typography variant="body1">Zajęcia z uczniami prowadzę od {startYear} roku.</Typography>
            </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-lg text-center">
            <div className='w-[300px] text-center mx-auto mt-[30px] flex flex-col gap-[20px]'>
                <Typography variant="h5" className="font-semibold">📈 Kwalifikacje</Typography>
                <Typography variant="body1">Przez wiele lat zdobywałam kwalifikacje (studia, kursy) by móc prowadzić zajęcia najwyszej jakości.</Typography>
            </div>
        </SwiperSlide>
        <SwiperSlide className="bg-white rounded-lg text-center">
            <div className='w-[300px] text-center mx-auto mt-[30px] flex flex-col gap-[20px]'>
                <Typography variant="h5" className="font-semibold">⏰ Elastyczne godziny</Typography>
                <Typography variant="body1">Dopasowuję się do Twojego grafiku – poranki, wieczory, weekendy.</Typography>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
