import { Button } from '@material-ui/core';
import React from 'react'
import "../Styles/Login.css";


function Login() {


const signIn = () => {
    
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
