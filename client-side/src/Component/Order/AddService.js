import React from 'react';
import Sidebar from './Sidebar';

const AddService = () => {
    return (
        <section>
        <div className="row">
            <div className="col-md-3 col-sm-6 col-12">
                <Sidebar></Sidebar>
            </div>
            <section className="container-fluid row">
                <div className="col-md-6 p-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                    <h5 className="text-brand">Add a Service</h5>
                    <form >
                        <div className="form-group">
                            <input  type="text" required className="form-control" name="name" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <input type="email" required className="form-control" name="email" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <input  type="text" required className="form-control" name="serviceName" placeholder="service Name" />
                        </div>
                        <div>
                            <textarea  name="description" className="form-control" cols="20" rows="10" required placeholder="Message *"></textarea><br />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Upload a image</label>
                            <input  type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                        </div>
                        <button type="submit" className="btn btn-outline-dark">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    </section>
    );
};

export default AddService;