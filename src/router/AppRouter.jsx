import { Route, Routes } from "react-router-dom";
import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

// Este es el componente de rutas llmado en HeroesApp, solo tiene la llamada a la
// ruta de la pagina login sin el navbar y al componente Heroes Routes

// Para cualquier ruta que no sea login se ira a las rutas del componente HeroesRoutes

export const AppRouter = () => {
  return (
    <>

        <Routes>

            {/* Esto permite poder acceder al login desde cualquier ruta
            al ser presionado el boton de login */}
            <Route path="login/*" element={
              <PublicRoute>
                <Routes>
                  <Route path="/*" element={<LoginPage />}/>
                </Routes>
              </PublicRoute>
            }/>

            <Route path="/*" element={
              <PrivateRoute>
                {/* Ruta a proteger */}
                <HeroesRoutes/> 
              </PrivateRoute>
            }/>
        
        </Routes>
    </>
  )
}
