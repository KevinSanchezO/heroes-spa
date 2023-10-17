import { types } from "../types/types";

// No se sabe si se tendran mas propiedades en el estado, seria bueno hacerle un spread al state

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            };
        case types.logout:
            return {
                ...state,
                logged: false
            };    
        default:
            return state;
    }
}