import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroByID } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
    // este custom hook de react router permite poder obtener los parametros del URL para
    // hacer uso de estos en el componente o en este caso pagina
    // recordemos que en el HeroRoutes tenemos asignado esta pagina a la ruta
    const {id} = useParams(); 

    const hero = useMemo( () => getHeroByID(id), [id]); // cuando llamamos a una funcion directamente se debe memorizar

    const navigate = useNavigate(); // custom hook

    const onNavigateBack = () => {
        navigate(-1);
        // navigate(`/${hero.publisher === 'Marvel Comics'? 'marvel':'dc'}`, {
        //     replace: true
        // });
    }

    // En esta condicion en caso de que el hero que se obtiene del parametro del URL no
    // sea valido y de un undefined (que desencadena un error) hace entonces que se
    // redirecte a otra ruta ya establecida.
    if (!hero) {
        return <Navigate to='/marvel'/>
    }
    
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    className="img-thumbnail animate__animated animate__fadeInLeft" 
                    src={`/assets/heroes/${id}.jpg`} 
                    alt={hero.superhero} 
                />
            </div>
            {/* animaciones con la libreria de Animate.css | animate__animated animate_cualquierAnimacion */}
            {/* https://animate.style/ */}
            <div className="col-8 animate__animated animate__fadeInDown">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego:</b> {hero.alter_ego} </li>
                    <br/>
                    <li className="list-group-item"> <b>Publisher:</b> {hero.publisher} </li>
                    <br/>
                    <li className="list-group-item"> <b>First appearance:</b> {hero.first_appearance} </li>
                </ul>

                <h5 className="mt-3">Characters</h5>
                <p>{hero.characters}</p>

                <button 
                    className="btn btn-outline-primary"
                    onClick={onNavigateBack}>
                    Back
                </button>
            </div>
        </div>  
    )
}
