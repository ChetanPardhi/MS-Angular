import { LoginReducer } from "../auth/state/user-login.reducer"
import { LoginState } from "../auth/state/user-login.state"
import { productReducer } from "../home/state/product.reducer"
import { ProductState } from "../home/state/product.state"

export interface AppState {
    products : ProductState,
    loginCredentials : LoginState
}

export const appReducer = {
    products : productReducer,
    loginCredentials : LoginReducer
}