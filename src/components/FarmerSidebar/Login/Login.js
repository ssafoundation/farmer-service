import React, { useContext, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../../App';
// import google_icon from '../../../image/google.png';
import {
   firebaseInitialize,
   googleProvider,
   signInWithSocialPopup
} from '../Firebase/Firebase';
import './Login.css';

firebaseInitialize();

const Login = () => {
   const [loggend, setLoggend] = useContext(UserContext);
   const history = useHistory();
   const location = useLocation();
   const [show, setShow] = useState(loggend.errorMessage);

   const { from } = location.state || { from: { pathname: '/' } };

   const handleLogin = () => {
      signInWithSocialPopup(googleProvider)
         .then((result) => {
            setLoggend(result);
            history.replace(from);
         })
         .catch((error) => {
            setLoggend(error);
         });
   };

   return (
      <div className="login container-fluid">
         <div className="login-container">
            <h2>Login Form</h2>
            {show && (
               <Alert
                  variant="danger"
                  onClose={() => setShow(false)}
                  dismissible
                  className="text-center"
               >
                  {loggend.errorMessage}
               </Alert>
            )}
            <button className="btn login-btn" onClick={handleLogin}>
              <p><i class="fab fa-google    "></i></p>
               <span>Sign in with Google</span>
            </button>
         </div>
      </div>
   );
};

export default Login;
