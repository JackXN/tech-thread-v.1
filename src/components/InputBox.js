import React from 'react'
import { Avatar } from '@material-ui/core';
import "../Styles/InputBox.css";




function InputBox() {




const handleSubmit = (e) => {
   e.preventDefault();
   console.log('submitted')
   
}



    return (
        <div className='inputBox'>
            {/* Input Top */}
            <div className='input_top'>
<Avatar/>       

<form onSubmit={handleSubmit}>
    <input type='text' placeholder={'Whats on your mind?'}/>
<input placeholder='imae URL (optional)'/>
<button type='submit' onSubmit={handleSubmit} hidden>this button is hiding</button>
</form>
            </div>

            {/* Input Bottom */}
            <div className='input_bottom'>
                
            <div className='input_option'>

            </div>

            <div className='input_option'>
                
                </div>
                
                <div className='input_option'>
                
                </div>

            </div>

        </div>
    )
}

export default InputBox
