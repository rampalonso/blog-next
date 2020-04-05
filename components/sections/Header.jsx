import React from 'react';
import Link from 'next/link'
import MainMenu from '../navigation/MainMenu';


const Header = () => (
  <header className="main-header">
    <div className="ed-grid s-grid-5 lg-grid-4">
      <div className="s-cols-4 lg-cols-1 s-cross-center">
        <Link href="/">
          <a><img className="main-logo" src="/ed-logo.svg" alt="EDlogo" /></a>
        </Link>
      </div>
      <MainMenu />
    </div>
  </header>
);

export default Header;