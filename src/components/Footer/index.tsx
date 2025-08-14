import React from 'react';
import { Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-light-purple py-10 px-6 text-center">
      <div className="max-w-5xl text-left mx-auto flex flex-row gap-[125px] content-center items-start justify-center flex-wrap">
        {/* Rząd 1 */}
        <div className="flex flex-wrap justify-center flex-col gap-8 ">
        <Typography variant="h6">Strona główna</Typography>
          <MuiLink component={Link} to="/" underline="hover" color="inherit">
            <Typography variant="body1">Home</Typography>
          </MuiLink>
        </div>

        <div className="flex flex-wrap justify-center flex-col gap-8 ">
        <Typography variant="h6">Rodzaje zajęć</Typography>
        <div className='flex gap-4 flex-col'>
          <MuiLink component={Link} to="/online" underline="hover" color="inherit">
            <Typography variant="body1">Zajęcia online</Typography>
          </MuiLink>
          <MuiLink component={Link} to="/z-dojazdem" underline="hover" color="inherit">
            <Typography variant="body1">Zajęcia z dojazdem</Typography>
          </MuiLink>
          </div>
        </div>

        <div className="flex flex-wrap justify-center flex-col gap-8 ">
        <Typography variant="h6">Cennik</Typography>
        <div className='flex gap-4 flex-col'>
          <MuiLink component={Link} to="/online#cennik" underline="hover" color="inherit">
            <Typography variant="body1">Cennik zajęć online</Typography>
          </MuiLink>
          <MuiLink component={Link} to="/z-dojazdem#cennik" underline="hover" color="inherit">
            <Typography variant="body1">Cennik zajęć z dojazdem</Typography>
          </MuiLink>
          </div>
        </div>

        {/* Rząd 2 */}
        <div className="flex flex-wrap justify-center flex-col gap-8">
        <Typography variant="h6">Kontakt</Typography>
        <div className='flex gap-4 flex-col'>
          <MuiLink component={Link} to="/o-mnie" underline="hover" color="inherit">
            <Typography variant="body1">O mnie</Typography>
          </MuiLink>
          <MuiLink component={Link} to="/kontakt" underline="hover" color="inherit">
            <Typography variant="body1">Kontakt</Typography>
          </MuiLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
