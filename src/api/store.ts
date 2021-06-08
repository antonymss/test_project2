import thunk from "redux-thunk";
import {authReducer} from "../Login/auth-reducer";
import {applyMiddleware, combineReducers, createStore} from 'redux';

const rootReducer = combineReducers({
    auth: authReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>