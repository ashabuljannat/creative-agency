import React from 'react';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';


const Feedback = () => {
    return (
        <div className='container '>
        <h2 className='text-center my-5'>Client Feedback</h2>
        <div className="row d-flex justify-content-center  ">
        <div className="col-sm-4">
            <div className="card text-center ">
            <img src={customer1} alt="" height="60px" width="60px" className="mx-5 "/>
            <div className="card-body">
                <h4>John alimder</h4>
                <h6 className="card-title">CEO, mandola</h6>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                
            </div>
            </div>
        </div>
        <div className="col-sm-4">
            <div className="card text-center ">
            <img src={customer2} alt="" height="60px" width="60px"  className="mx-5 "/>
            <div className="card-body">
                <h4>john alimder</h4>
                <h6 className="card-title">CEO, mandola</h6>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
               
            </div>
            </div>
        </div>
        <div className="col-sm-4">
        <div className="card text-center">
          <img src={customer3} alt="" height="60px" width="60px"  className="mx-5 "/>
        <div className="card-body">
            <h4>john alimder</h4>
            <h6 className="card-title">CEO, mandola</h6>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
           
        </div>
        </div>
        </div>
        </div>
    </div>
    );
};

export default Feedback;