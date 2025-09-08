import { Button } from "@mui/material";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export const MobileMenu = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => setOpen(prev => !prev);
    const closeMenu = () => setOpen(false);

    return (
        <div className="md:hidden sticky t-0 z-[100000]">
            {/* Górny pasek z przyciskiem */}
            <div className="flex justify-end items-center px-4 py-3 shadow-md bg-white relative z-[100001]">
                <Button
                    onClick={toggleMenu}
                    className="text-4xl text-[#5a2a82] focus:outline-none z-[100002] m-[10px]"
                    variant="text"
                    size='large'
                >
                    {open ? <HiX size='24px' color='#5a2a82'/> : <HiMenu size='24px' color='#5a2a82'/>}
                </Button>
            </div>

            {/* Overlay menu */}
            {open && (
                <div
                    className="absolute top-0 left-0 w-full h-full bg-white z-[100000] flex flex-col items-left text-[22px] px-6 pt-[20px] gap-6"
                >
                    <NavLinks onClick={closeMenu} />
                </div>
            )}
        </div>
    );
};

type NavLinksProps = {
    onClick?: () => void;
};

const NavLinks = ({ onClick }: NavLinksProps) => (
    <>
        <a onClick={onClick} href="/" className="text-[#5a2a82] no-underline hover:text-[#FF0000]" style={{ fontFamily: "Mulish"}}>Home</a>
        <a onClick={onClick} href="/tlumaczenia" className="text-[#5a2a82] no-underline hover:text-[#FFA500]" style={{ fontFamily: "Mulish"}}>Tłumaczenia</a>
        <a onClick={onClick} href="/online" className="text-[#5a2a82] no-underline hover:text-[#FFA500]" style={{ fontFamily: "Mulish"}}>Zajęcia online</a>
        <a onClick={onClick} href="/z-dojazdem" className="text-[#5a2a82] no-underline hover:text-[#FFFF00]" style={{ fontFamily: "Mulish"}}>Zajęcia z dojazdem</a>
        <a onClick={onClick} href="/o-mnie" className="text-[#5a2a82] no-underline hover:text-[#008000]" style={{ fontFamily: "Mulish"}}>O mnie</a>
        <a onClick={onClick} href="/kontakt" className="text-[#008000] no-underline hover:text-blue-600" style={{ fontFamily: "Mulish"}}>Kontakt</a>
    </>
);
