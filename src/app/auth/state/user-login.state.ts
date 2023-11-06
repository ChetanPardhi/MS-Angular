import { LoginCredentialModel } from '../models/login.model';

export interface LoginState{
    loginCredentials : LoginCredentialModel;
}

export const initialState: LoginState = {
  loginCredentials : {
    userEmail: '',
    userPassword: '',
    isActive: false,
  },
};


