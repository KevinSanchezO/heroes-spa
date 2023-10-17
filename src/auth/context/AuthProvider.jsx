// Este componente sirve para proover la informacion a toda la aplicacion con el uso del AuthContext

import { useReducer } from "react"
import { authReducer } from "./authReducer"
import { AuthContext } from "./AuthContext";
import { types } from "../types/types";

const initialState = {
    logged: false,
}

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        logged: !!user,
        user: user
    }
}

export const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, initialState, init);

    const logIn = async(name = '') => {

        const user = {id: 'ABC', name}

        const action = {
            type: types.login,
            payload: user
        }

        localStorage.setItem('user', JSON.stringify(user));

        dispatch(action)
    }

    const logOut = () => {
        localStorage.removeItem('user');

        const action = {
            type: types.logout,
        };

        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{
            ...state,

            // Methods
            login: logIn,
            logout: logOut
        }}>
            { children }
        </AuthContext.Provider>
    )
}
