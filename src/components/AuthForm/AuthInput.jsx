import React from 'react'

import './AuthForm.css'

const AuthInput = ({InputLabel,InputPlaceHolder,InputType, isLogIn, InputValue, onChange, InputName,InputError, onBlur, InputTouched }) => {
  return (
        <div className={`auth-form_input-label-container ${InputPlaceHolder.toLowerCase() === 'john'? 'space' : ''}`}>
        <label className='auth-form_label'>{InputLabel}</label>
       {InputTouched ? <p>{InputError}</p>  :''}

          <input className='auth-form_input' type={InputType} name = {InputName} placeholder={InputPlaceHolder} onChange={onChange} value ={InputValue} />

 
    </div>
  )
}

export default AuthInput