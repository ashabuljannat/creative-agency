import React from 'react';

const Contact = () => {
    return (
        <div >
        <section className="contact my-5 py-5">
        <div className="container " style={{ backgroundColor:'#FAD062',height: '600px'}}>
        <div className="section-header text-center text-white mb-5">
                 <h5 className="text-primary">Contact</h5>
                 <h1>Always  connect with us</h1>
            </div>
            <div className="col-md-9 mx-auto">
                <form action="">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Email Address *"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Name/Company Name *"/>
                    </div>
                    <div className="form-group">
                        <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder=" Your Message "></textarea>
                    </div>
                    <div className="form-group text-center">
                        <button type="button" className="btn btn-dark"> Send </button>
                    </div>
                </form>
                <p> &copy; Copyright Creative Agency &hearts;</p>
            </div>
        </div>
       </section>
        </div>
    );
};

export default Contact;