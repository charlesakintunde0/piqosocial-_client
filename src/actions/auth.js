import * as actionTypes from "../constants/actionTypes";
import * as api from "../api/index";


export const signIn = (formData,navigate) => async (dispatch) => {
    try {
        const res = await api.signIn(formData);
        console.log(res)
        dispatch({ type: actionTypes.AUTH, payload: {
            token: res.data.access_token,
            user: res.data.user,
        }})
        
        dispatch({ type: actionTypes.NOTIFICATION, payload: {
            success: 'You have successfully logged in.'}
        })
        localStorage.setItem('profile', true);
        navigate('/home');
    } catch(error) {
        dispatch({type: actionTypes.NOTIFICATION, error:'Either you email or password is incorrect'})
    }
}

export const signUp = (formData,navigate) => async (dispatch) => {
    try {
        const res = await api.signUp(formData);
        console.log(res)
        dispatch({ type: actionTypes.AUTH, payload: {
            token: res.data.access_token,
            user: res.data.user,}})

            localStorage.setItem('profile', true);
            navigate('/home');
}  catch (error) {
    console.log(error)
}
}
