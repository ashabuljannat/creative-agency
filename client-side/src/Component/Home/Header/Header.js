import React from 'react';
import HeaderMain from './HeaderMain';
import Logo from './Logo';
import './Header.css';
import Navber from '../Navber/Navber';

const Header = () => {
    return ( 
           <div className="container fullHeader">
          <Navber></Navber>
           <HeaderMain></HeaderMain>
          
          </div>
    );
};

export default Header;