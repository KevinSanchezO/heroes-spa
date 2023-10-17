import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';


export const Navbar = () => {

    // customHook del router para navegar entre rutas
    const navigate = useNavigate();

    const {user, logout} = useContext(AuthContext);

    // Al hacer uso del hook para navegar se le manda la ruta y un objeto
    // Este objeto que tiene el replace remplaza la ruta en la que me encuentro.
    const onLogOut = () => {
        logout();

        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Publishers
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className= {({isActive}) => `nav-item nav-link ${ isActive ? 'active' : ''}`} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className= {({isActive}) => `nav-item nav-link ${ isActive ? 'active' : ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className= {({isActive}) => `nav-item nav-link ${ isActive ? 'active' : ''}`}
                        to="/search"
                    >
                        Search  
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                        {user?.name}
                    </span>

                    <button className='mnav-item nav-link btn' onClick={onLogOut}>
                        Log out
                    </button>
                </ul>
            </div>
        </nav>
    )
}