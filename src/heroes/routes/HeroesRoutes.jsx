import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DCPage, HeroPage, MarvelPage, SearchPage } from "../pages"

// En este componente con rutas se tiene el navbar para navegar entre rutas
// La ruta marvel lleva al componente MarvelPage
// La ruta dc lleva al componente DCPage
// La ruta search al componente HeroPage y hero a HeroPage
// Siempre se mantiene el Navbar y cambia el componente que se renderiza abajo
// La ruta base / realiza el {<Navigate to='/marvel'/>} funcionando como la base o un tipo index

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container">
            <Routes>
                <Route path="marvel" element={<MarvelPage/>}/>
                <Route path="dc" element={<DCPage/>}/>

                {/* Search, HeroByID */}

                <Route path="search" element={<SearchPage/>}/>
                <Route path="hero/:id" element={<HeroPage/>}/> 
                {/* el /:id es un comodin para poder permitir recibir argumentos */}

                {/* Como ya tengo las rutas Marvel no tengo que llamar a los componentes
                Ya existen entonces solo debo indicar que se navegue a esas rutas */}
                <Route path="/" element={<Navigate to='/marvel'/>}/>
            </Routes>
        </div>
    </>
  )
}
