import React from 'react';
import logo1 from '../../../images/logos/airbnb.png';
import logo2 from '../../../images/logos/google.png';
import logo3 from '../../../images/logos/netflix.png';
import logo4 from '../../../images/logos/slack.png';
import logo5 from '../../../images/logos/uber.png';


const Logo = () => {
    return (
        <div className='container my-5'>
           <marquee behavior="" direction="">
          <div className="d-flex flex-row  mb-3" >
            <a href="/airbunb"><div className="p-2 bd-highlight mx-3 ml-5"> <img src={logo1} alt="" height='30px' width='100px'/></div></a>
            <a href="/google"><div className="p-2 bd-highlight mx-3"> <img src={logo2} alt="" height='30px' width='100px'/></div></a>
            <a href="/netflix"><div className="p-2 bd-highlight mx-3"> <img src={logo3} alt="" height='30px' width='80px'/></div></a>
            <a href="/slack"><div className="p-2 bd-highlight mx-3"> <img src={logo4} alt="" height='30px' width='100px'/></div></a>
            <a href="/uber"><div className="p-2 bd-highlight mx-3"> <img src={logo5} alt="" height='30px' width='75px'/></div></a>
            <a href="/google"><div className="p-2 bd-highlight mx-3"> <img src={logo2} alt="" height='30px' width='100px'/></div></a>
            <a href="/netflix"><div className="p-2 bd-highlight mx-3"> <img src={logo3} alt="" height='30px' width='80px'/></div></a>
            <a href="/slack"><div className="p-2 bd-highlight mx-3"> <img src={logo4} alt="" height='30px' width='100px'/></div></a>
            <a href="/airbunb"><div className="p-2 bd-highlight mx-3 ml-5"> <img src={logo1} alt="" height='30px' width='100px'/></div></a>

         </div>
         </marquee>
        </div>
    );
};

export default Logo;