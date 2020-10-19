import React from 'react';
import service1 from '../../images/icons/service1.png';
import Sidebar from './Sidebar';



const MyOrder = () => {
    return (


        <section>
          <div className="row">
            <div className="col-md-3 ">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-5  d-flex justify-content-center">
             <h4>Your Service List</h4>
            <div className="card text-center mt-5">
            <img src={service1} alt="" height="60px" width="60px" className="mx-5 "/> 
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
         </div>
        </div>
    </section>
    );
};

export default MyOrder;