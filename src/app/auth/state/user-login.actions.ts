import { createAction, props } from "@ngrx/store";
import { LoginCredentialModel } from "../models/login.model";

const LOGIN_SUCCESS = "User Logged In"

export const userLoggedInCredentials = createAction(
    LOGIN_SUCCESS,
    props<{loginCredentials:LoginCredentialModel}>()
)