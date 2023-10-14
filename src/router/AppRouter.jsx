import { Route, Routes } from "react-router-dom";
import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";

// Este es el componente de rutas llmado en HeroesApp, solo tiene la llamada a la
// ruta de la pagina login sin el navbar y al componente Heroes Routes

// Para cualquier ruta que no sea login se ira a las rutas del componente HeroesRoutes

export const AppRouter = () => {
  return (
    <>

        <Routes>

            <Route path="login" element={<LoginPage/>}/>

            <Route path="/*" element={<HeroesRoutes/>}/>
        
        </Routes>
    </>
  )
}
