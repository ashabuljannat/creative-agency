import React from 'react';
import slide1 from '../../../images/carousel-1.png';
import slide2 from '../../../images/carousel-2.png';
import slide3 from '../../../images/carousel-3.png';
import slide4 from '../../../images/carousel-4.png';
import slide5 from '../../../images/carousel-5.png';


const Example = () => {
    return (
        <div className="container my-5 p-5" style={{backgroundColor: '#101431'}}>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-60" src={slide1} alt="First slide" height="400px"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-60" src={slide2} alt="Second slide" height="400px" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-60" src={slide3} alt="Third slide" height="400px" />
          </div>
          <div className="carousel-item">
          <img className="d-block w-60" src={slide4} alt="Forth slide" height="400px" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-60" src={slide5} alt="Fifth slide" height="400px" />
        </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
        </div>
    );
};

export default Example;