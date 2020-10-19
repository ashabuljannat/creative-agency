import React from 'react';
import photo from '../../../images/logos/Frame.png'



const HeaderMain = () => {
    return (
       <div className="container my-5 ">
            <div className='row'>
            <div className="col-sm-6 mt-3">
            <div className=" px-3  align-items-center">
               <h2>
                  Let's Grow Your Brand <br/> To The Next Level
               </h2>
               <p> 
                  Lorem ipsum dolor sit
                   amet consectetur adipisicing elit. Impedit earum id aperiam vitae quae ad veniam debitis, ullam recusandae minima!
               </p>
               <button className="btn btn-outline-dark">Hire Us</button>
              </div>
                  </div>
              <div className="col-sm-6">
                <div >
                <img src={photo} alt="" height='350px' width='500px'/>
                </div>
            </div>
        </div>
       </div>

    );
};

export default HeaderMain;