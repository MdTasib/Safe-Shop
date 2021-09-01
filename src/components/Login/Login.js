import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import login from '../../images/login2.GIF';
import google from '../../images/google.png';
import firebase from 'firebase/app';
import { GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from '../firebase.confiq';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  document.title = 'Login';
  const [logedInUser, setLogedInUser] = useContext(UserContext)

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };


  const handleLogIn = () => {
    const provider = new GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        const userDetails = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          photo: result?.user?.photoURL
        }
        setLogedInUser(userDetails)
        history.replace(from);

      }).catch((error) => {
        console.log(error)
      });
  };

  //   const handleLogOut = () => {
  //     firebase.auth().signOut().then(() => {
  //         const userDetails = {
  //             name: '',
  //             email: '',
  //             photo: ''
  //         }
  //         setLogedInUser(userDetails)
  //         history.replace(from);
  //       }).catch((error) => {
  //           console.log(error)
  //       });
  // }

  return (
    <div className='m-auto text-center w-50 mb-3'>
      <Card>
        <Card.Header as="h5" className='bg-warning'>Welcome back! Please sign in</Card.Header>
        <Card.Body>
          <Card.Img variant="top mb-2" src={login} height={300} />
          <Button onClick={handleLogIn} variant="outline-warning"><img src={google} alt="" width={30} /> Login With Google</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;