import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  
  // customHook del router para navegar entre rutas
  const navigate = useNavigate();

  // Al hacer uso del hook para navegar se le manda la ruta y un objeto
  // Este objeto que tiene el replace remplaza la ruta en la que me encuentro.
  const onLogin = () => {
    navigate('/', {
      replace: true
    });
  }

  return (
    <div className="container mt-5">

      <h1> Log in </h1>
      <hr />
      <button className="btn btn-primary" onClick={onLogin}> Log in </button>

    </div> 
  )
}
