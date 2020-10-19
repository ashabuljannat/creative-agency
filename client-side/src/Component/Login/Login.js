import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Config/Config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../../images/logos/logo.png';
import './Login.css';





const Login = () => {
    const [loggedInUser ,setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
  
    const  { from } = location.state || { from: { pathname: "/" } };


    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig)
      }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
          firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email,photoURL} = result.user;
          setLoggedInUser({name : displayName,email,photoURL})
          history.replace(from);
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            console.log(errorCode,errorMessage,email);
          });
       }  

 
    return (
        <div className='container login-card text-center'>
              <img src={logo} alt="" height='30px' width='100px'/>
            <h3>Login With</h3>
            <button className='btn btn-primary' variant='outline-danger' onClick={handleGoogleSignIn}>Google Sign In</button>
        </div>
    );
};

export default Login;