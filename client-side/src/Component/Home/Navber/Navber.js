import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';
import './Navbar.css';

 
const Navber = () => {

  const [loggedInUser ,setLoggedInUser] = useContext(UserContext)


    return (
        <div className="container mainNav">
        <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand" href="#">
               <img src={logo} width="150px" height="45px" alt=""/>
         </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item active mr-3">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link" href="#">Our Portfolio</a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link" href="#">Our Team</a>
            </li> 
            <li className="nav-item mr-3">
            <a className="nav-link" href="#">Contact us</a>
           </li>
          <Link to="/login"><button className="btn btn-outline-dark">Login</button></Link>
          </ul>
          <h4>Name:{loggedInUser.name}</h4>
        </div>
      </nav>
      </div>
    );
};

export default Navber;