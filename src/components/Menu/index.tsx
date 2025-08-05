import React, { useEffect, useState } from "react"

export const Menu = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
    return (
        <div 
            style={{ fontFamily: "Mulish" }}
            className={`flex sticky top-[0px] z-[1000] p-[18px] text-[20px] justify-center shadow-[0_4px_6px_rgba(118,118,215,0.29)] gap-[64px] ${
                isScrolled ? "bg-[#fff]" : "bg-opacity"
            }`}
        >
            <a href="/" className="text-[#5a2a82] no-underline hover:text-[#FF0000]">
                Home
            </a>
            <a href="/lekcje-online" className="text-[#5a2a82] no-underline hover:text-[#FFA500]">
                Lekcje online
            </a>
            <a href="/lekcje-z-dojazdem" className="text-[#5a2a82] no-underline hover:text-[#FFFF00]">
                Lekcje z dojazdem
            </a>
            <a href="/o-mnie" className="text-[#5a2a82] no-underline hover:text-[#008000]">
                O mnie
            </a>
            <a href="/kontakt" className="text-[#008000] no-underline hover:text-[#0000FF]">
                Kontakt
            </a>
        </div>
    )
}