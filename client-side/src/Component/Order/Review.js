import React from 'react';
import Sidebar from './Sidebar';

const Review = () => {
    return (
        <section>
            <div className="row">
                <div className="col-md-3 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center">
                    <div style={{ margin: '30px' }}>
                    <h4>Please Give Your Review For Improve Our Service</h4>
                        <form className="d-flex row" >
                            <input name="name" placeholder="Your name" className="form-control" /><br />
                            <input name="title" placeholder="Company's Name." className="form-control"/><br />
                            <textarea name="Description" className="form-control" cols="30" rows="10" placeholder="Message *" ></textarea><br />
                            <input className="btn btn-outline-dark" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;