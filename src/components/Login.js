import { Button } from '@material-ui/core';
import React from 'react'
import "../Styles/Login.css";
import {auth, provider} from '../firebase';
import {actionTypes} from '../reducer';
import {useStateValue} from '../StateProvider';





function Login() {
    const [state, dispatch] = useStateValue();

const signIn = () => {
    auth.signInWithPopup(provider)
    .then((result) => {
        dispatch({
            type: actionTypes.SET_USER,
            user: result.user, 
        })
        

    })
    .catch((error) => console.log(error))
}


    return (
        <div className='login'>
            <div className='login-logo'>
            <img src='https://seeklogo.com/images/F/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png' alt='facebook logo'/>
            
<img src='https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png' alt='facebook-text'/>
            </div>

            <Button type='submit' onClick={signIn}>
                Sign In
            </Button>

        </div>
    )
}

export default Login
