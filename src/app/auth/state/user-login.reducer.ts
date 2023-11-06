import { createReducer ,on, Action } from '@ngrx/store';
import { userLoggedInCredentials } from './user-login.actions';
import { initialState } from './user-login.state';

export const LoginReducer = createReducer(
    initialState,
    on( userLoggedInCredentials ,(state,{loginCredentials})=>({
        ...state,
        loginCredentials:loginCredentials
    }))
)