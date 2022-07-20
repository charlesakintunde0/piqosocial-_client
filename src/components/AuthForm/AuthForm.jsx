import React,{ useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {useFormik} from 'formik'
import { useNavigate } from 'react-router';
import * as Yup from 'yup'

import './AuthForm.css'
import AuthInput from './AuthInput'
import { signIn, signUp} from '../../actions/auth'
// const authData = useSelector(state => state.auth)


// console.log(authData)


const formValues ={
  first_name: '', 
  last_name: '',
  email: '',
  password: '',
  password1: '',
  password2: '',
  username: '',
}

const AuthForm = () => {
  const [isLogIn,setIsLogIn] = useState(true)
  const [ authFormValues,setAuthFormValues] = useState(formValues)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleAuthFormSubmit = () => {
    
    if (isLogIn) {
      dispatch(signIn(formik.values,navigate))
    }else{
      console.log(formik.values)
      dispatch(signUp(formik.values,navigate))
    }
    formik.resetForm({values: ''})

  }


  const LoginValidationSchema = Yup.object({
     username: Yup.string().required(),
     password: Yup.string().required('Enter your password to login!'),
  })


  const SignUpValidationSchema = Yup.object({
    first_name: Yup.string().required(),
    last_name: Yup.string().required(),
    username: Yup.string().required(),
    password1: Yup.string().min(8, "Password is too short - should be 8 chars minmimum"),
    password2: Yup.string().matches(authFormValues.password1).required('Confirm your password!'),
    email: Yup.string().email('Invalid email address').required('Please enter your email')


  })
  
  const formik = useFormik({
    initialValues: authFormValues,
    onSubmit: handleAuthFormSubmit,
    validationSchema: isLogIn ? LoginValidationSchema : SignUpValidationSchema
  })


  return (
    <div className="container">
        <form className='auth-form' onSubmit={formik.handleSubmit}>
     <div className='auth-form_input-wrapper'>
     <div className="auth-form_header">
         <h1>{isLogIn ? 'Login into' : 'Register'} your Piqosocial account</h1>
        </div>
       {
        !isLogIn ?  <div className='auth-form_input-control'>
        <AuthInput onBlur={formik.handleBlur} InputTouched = {formik.touched.first_name} InputName={'first_name'} InputValue={formik.values.first_name} InputError={formik.errors.first_name}  onChange = {formik.handleChange} InputLabel={'First Name'} InputType={'text'} InputPlaceHolder={'John'}/>
        <AuthInput onBlur={formik.handleBlur} InputTouched = {formik.touched.last_name} InputName={'last_name'} InputError={formik.errors.last_name}  InputValue={formik.values.last_name} onChange = {formik.handleChange} InputLabel={'Last Name'} InputType={'text'} InputPlaceHolder={'Doe'}/>
    </div> : ''
       }
    
    <AuthInput onBlur={formik.handleBlur} InputTouched = {formik.touched.username} InputError={formik.errors.username}  InputName={'username'}  InputValue={formik.values.username} onChange = {formik.handleChange} isLogIn={isLogIn} InputLabel={'Username'} InputType={'username'} InputPlaceHolder={'Ireoluwa'}/>
     {
      !isLogIn ?      <AuthInput onBlur={formik.handleBlur} InputTouched = {formik.touched.email} InputError={formik.errors.email}  InputName={'email'}  InputValue={formik.values.email} onChange = {formik.handleChange} isLogIn={isLogIn} InputLabel={'Email'} InputType={'email'} InputPlaceHolder={'john@example.com'}/>
       : ''
     }
         <AuthInput InputError={isLogIn ? formik.errors.password : formik.errors.password1} InputName={isLogIn ? 'password' : 'password1'} onBlur={formik.handleBlur} InputTouched = {isLogIn ? formik.touched.password: formik.touched.password1}  InputValue={isLogIn ? formik.values.password: formik.values.password1} onChange = {formik.handleChange} InputLabel={'Password'} InputType={'password'} InputPlaceHolder={'123123'}/>
       {
        !isLogIn ?  <AuthInput InputName={'password2'} InputError={formik.errors.password2}   InputValue={formik.values.password2} onBlur={formik.handleBlur} InputTouched = {formik.touched.password2} onChange = {formik.handleChange} InputLabel={'Confirm Paswword'} InputType={'password'} InputPlaceHolder={'123123'}/>  : ''
       }
        
        <div className='auth-form_button-container'><button type='submit' >{isLogIn ? 'Login' : 'Signup'}</button>
        <p onClick={()=> {setIsLogIn(!isLogIn)}}>{isLogIn ? 'Create Account' : <>Already have an account? <span>Log In</span></>}</p></div>

     </div>
    </form>
    </div>
  )
}

export default AuthForm