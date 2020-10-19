import React from 'react';
import { Link } from 'react-router-dom';
import service1 from '../../../images/icons/service1.png'
import service2 from '../../../images/icons/service2.png'
import service3 from '../../../images/icons/service3.png'


const Service = () => { 
   
//    const onSubmit = (data) => {
//     fetch('http://localhost:5000/addService',{
//         method: 'POST',
//         headers: { 'Content-Type':'application/json'},
//         body: JSON.stringify(data)
//     })
//     .then(res => res.json())
//     .then(console.log(data) )
 //  onClick={onSubmit
//    }


    return (
        <div className='container '>
            <h2 className='text-center my-5'>Provide Awesome Services</h2>
            <div className="row d-flex justify-content-center  ">
            <div className="col-sm-4">
                <div className="card text-center ">
                <img src={service1} alt="" height="60px" width="60px" className="mx-5 "/> 
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Link to="/order"><button className='btn btn-primary' >Get Your Service</button></Link>
                </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="card text-center ">
                <img src={service2} alt="" height="60px" width="60px"  className="mx-5 "/>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Link to="/order"><button className='btn btn-primary'>Get Your Service</button></Link>
                </div>
                </div>
            </div>
            <div className="col-sm-4">
            <div className="card text-center">
              <img src={service3} alt="" height="60px" width="60px"  className="mx-5 "/>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Link to="/order"><button className='btn btn-primary'>Get Your Service</button></Link>
            </div>
           </div>
          </div>
         </div>
        </div>
    );
};

export default Service;