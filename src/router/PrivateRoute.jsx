import { useContext } from "react";
import { AuthContext } from "../auth";
import {Navigate, useLocation} from 'react-router-dom';

// Receives the children components and checks if the user is logged to allow access
export const PrivateRoute = ({children}) => {
    
    const { logged } = useContext(AuthContext);
    const {pathName, search} = useLocation();
    
    // Esta seccion de codigo se ejecutara siempre que suceda un cambio en la pagina
    // Por ejemplo, en el buscador si se busca dos veces el mismo prompt se re-renderiza
    // Siempre se puede implementar un useEffect o un useMemo para evitar en casos donde
    // No se quiera este behaviour
    const lastPath = pathName + search;
    console.log(pathName)
    localStorage.setItem('lastPath', lastPath);

    return (logged)
        ? children
        : < Navigate to="/login" />
}
