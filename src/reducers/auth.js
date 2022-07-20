import * as actionType from '../constants/actionTypes'

const authReducer = (state = { authData : null}, action) => {

   switch (action.type) {
    case actionType.AUTH:
        
        return { ...state,authData: action.payload, loading: false, errors: null}

        default:
         return state
   }
  
}


export default authReducer