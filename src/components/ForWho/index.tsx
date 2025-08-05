import { Typography } from "@mui/material"
import React from "react"
import { BookOpenIcon, AcademicCapIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

export const ForWho = () => {
    return (
        <div className="p-[64px] pt-[120px] flex flex-col items-center justify-center content-center">
            <Typography variant="h3">
                Dla kogo przeznaczona jest moja oferta?
            </Typography>
            <div className="grid grid-cols-3 gap-[16px] mt-[64px]">
                <div className="bg-[#f6f2f9] p-[24px] shadow-md rounded-[12px] hover:bg-[#e3d6ee]">
                    <BookOpenIcon className="w-[64px] text-[#5a2a82]" />
                    <Typography variant='body1' fontWeight={700} className="pb-[12px] text-[#5a2a82]">
                        Młodzi odkrywcy języka <br/>(dla uczniów)
                    </Typography>
                    <Typography variant="body1">
                        Wsparcie w nauce szkolnej, korepetycje, przygotowanie do sprawdzianów, egzaminów i matury – wszystko, by nauka języka była skuteczna i przyjemna.
                    </Typography>
                    
                </div>
                <div className="bg-[#f6f2f9] p-[24px] shadow-md rounded-[12px] hover:bg-[#e3d6ee]">
                    <AcademicCapIcon className="w-[64px] text-[#5a2a82]" />
                    <Typography variant='body1' fontWeight={700} className="pb-[12px] text-[#5a2a82]">
                        Przyszli profesjonaliści <br/> (dla studentów)
                    </Typography>
                    <Typography variant="body1">
                        Pomoc w przygotowaniu do kolokwiów, egzaminów i prezentacji akademickich, a także rozwijanie umiejętności językowych potrzebnych w karierze.
                    </Typography>
                </div>
                <div className="bg-[#f6f2f9] p-[24px] shadow-md rounded-[12px] hover:bg-[#e3d6ee]">
                    <GlobeAltIcon className="w-[64px] text-[#5a2a82]" />
                    <Typography variant='body1' fontWeight={700} className="pb-[12px] text-[#5a2a82]">
                        Miłośnicy języka i kultury <br/>(dla tych, którzy chcą szlifować język)
                    </Typography>
                    <Typography variant="body1">
                        Od podstaw po biegłość – nauka języka dostosowana do Twoich celów. Konwersacje, doskonalenie gramatyki i płynności w swobodnej atmosferze.
                    </Typography>
                   
                </div>
                
            </div>
        </div>
    )
}