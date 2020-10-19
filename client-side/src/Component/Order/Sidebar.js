import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Sidebar.css';



const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

 


    return (
        
            <div className="sidebar d-flex flex-column justify-content-between col-md-3 py-3 px-3 h-100" >
                <ul>
                      
                            <li>
                                <Link to="/addService">
                                    <span>Add Service</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/myServiceList">
                                    <span>Your Service List</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/review">
                                    <span>Review</span>
                                </Link>
                            </li>
                            <h4>{loggedInUser.name}</h4>
                </ul>
            </div>
      
    );
};

export default Sidebar;