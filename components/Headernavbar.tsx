import React from 'react'
import Logo from './Headerbar/Logo';
import { Menubar } from './Headerbar/Menubar';
import Login from "./Headerbar/Login";


const Headernavbar = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-background dark h-16">
      <Logo />
      <Menubar />
      <Login />
    </div>
  );
};

export default Headernavbar