// FooterMobile.jsx
import React from 'react';
import { Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

const FooterMobile = () => {
  return (
    <footer className="bg-light-purple py-10 px-6 text-center">
      <div className="flex flex-col gap-10 max-w-md mx-auto">
        
        <div className="flex flex-col gap-4 items-start">
          <Typography variant="h6">Strona główna</Typography>
          <MuiLink component={Link} to="/" underline="hover" color="inherit">
            Home
          </MuiLink>
        </div>

        <div className="flex flex-col gap-4 items-start">
          <Typography variant="h6">Rodzaje zajęć</Typography>
          <MuiLink component={Link} to="/online" underline="hover" color="inherit">
            Zajęcia online
          </MuiLink>
          <MuiLink component={Link} to="/z-dojazdem" underline="hover" color="inherit">
            Zajęcia z dojazdem
          </MuiLink>
        </div>

        <div className="flex flex-col gap-4 items-start">
          <Typography variant="h6">Cennik</Typography>
          <MuiLink component={Link} to="/online#cennik" underline="hover" color="inherit">
            Cennik zajęć online
          </MuiLink>
          <MuiLink component={Link} to="/z-dojazdem#cennik" underline="hover" color="inherit">
            Cennik zajęć z dojazdem
          </MuiLink>
        </div>

        <div className="flex flex-col gap-4 items-start">
          <Typography variant="h6">Kontakt</Typography>
          <MuiLink component={Link} to="/o-mnie" underline="hover" color="inherit">
            O mnie
          </MuiLink>
          <MuiLink component={Link} to="/kontakt" underline="hover" color="inherit">
            Kontakt
          </MuiLink>
        </div>
      </div>
    </footer>
  );
};

export default FooterMobile;
