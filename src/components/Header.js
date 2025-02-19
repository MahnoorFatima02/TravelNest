import React from 'react';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Travel Nest Logo" className="logo" />
        <h1>Travel Nest</h1>
      </div>
      <p className="header-description">
        Welcome to our world, your trusted travel consultancy specializing in visa processing, appointment scheduling, and hassle-free travel solutions. 
        We ensure a smooth and stress-free experience, guiding you through every step of
        your visa application with expert support. 
        Let us handle the complexities while you focus on your journey!
        </p>
    </header>
  );
}

export default Header;
