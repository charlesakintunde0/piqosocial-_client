import * as actionType from "../constants/actionTypes";



const notificationReducer = (state = {notification: null}, action ) => {
    switch(action.type) {
        case actionType.NOTIFICATION:
            return {notification: action.payload };
        default:
            return state;
    }
}

export default notificationReducer