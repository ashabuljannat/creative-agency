import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import './App.css';
import Contact from './Component/Home/Contact/Contact';
import Example from './Component/Home/Example/Example';
import Feedback from './Component/Home/Feedback/Feedback';
import Header from './Component/Home/Header/Header';
import Logo from './Component/Home/Header/Logo';
import Service from './Component/Home/Service/Service';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/Login/PrivateRoute';
import AddService from './Component/Order/AddService';
import MyOrder from './Component/Order/MyOrder';
import Order from './Component/Order/Order';
import Review from './Component/Order/Review';



export const UserContext = createContext();

function App() {
  const [loggedInUser ,setLoggedInUser] = useState({});

  return ( 
    <div>
    <UserContext.Provider value={[loggedInUser , setLoggedInUser]}>
      <Router>
      <Switch>
      <Route exact path="/">
        <Header />
        <Logo></Logo>
        <Service></Service>
        <Example></Example>
        <Feedback></Feedback>
        <Contact></Contact>
      </Route>
      <Route path="/login">
          <Login></Login>
      </Route>
      <PrivateRoute path="/order">
         <Order />
      </PrivateRoute>
      <PrivateRoute path="/addService">
         <AddService />
      </PrivateRoute>
      <PrivateRoute path="/myServiceList">
         <MyOrder />
      </PrivateRoute>
      <PrivateRoute path="/review">
         <Review />
      </PrivateRoute>
      </Switch>
    </Router>
    </UserContext.Provider>
    </div>
  );
}

export default App;