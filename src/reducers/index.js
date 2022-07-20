import { combineReducers} from 'redux'

import authReducer from './auth'
import notificationReducer from './notification'

export const reducers = combineReducers({auth: authReducer,notification: notificationReducer})