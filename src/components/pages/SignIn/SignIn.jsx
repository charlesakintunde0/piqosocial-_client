import React,{useState} from 'react'
import PiqosocialAuthImage from '../../../assets/PiqosocialAuthImage2.jpeg'
import AuthForm from '../../AuthForm/AuthForm'
import './SignIn.css'

const src = "https://assets.codepen.io/3364143/7btrrd.mp4"

const SignIn = () => {
    // const dispatch = useDispatch()
    
    
    
  return (
    <section className={`signin`} >
     <div className="signin-container">
      <div className="signin-container__form-wrapper">
       {/* <img src='https://images.pexels.com/photos/604684/pexels-photo-604684.jpeg?auto=compress&cs=tinysrgb&w=400'/> */}
       
        <AuthForm/>
      </div>
     </div>
    </section>
  )
}

export default SignIn