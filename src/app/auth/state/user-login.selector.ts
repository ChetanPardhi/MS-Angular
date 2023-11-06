import { AppState } from "src/app/store/app.module";
import { createSelector } from '@ngrx/store';
import { LoginState } from "./user-login.state";

export const selectLogin = (state : AppState) => state.loginCredentials;

export const SelectLoginCredentials = createSelector(
    selectLogin,
    (state:LoginState)=>state.loginCredentials
)