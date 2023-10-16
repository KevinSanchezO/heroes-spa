import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import queryString from "query-string";
import { getHeroesByName } from "../helpers";
// yarn add query-string, extrae todo lo que se encuentra en el
// objeto del search

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  // useLocation permite obtener un objeto basado en el URL

  const {q = ''} = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const {searchText, onInputChange} = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;

    // De esta forma se manda el query parameter teniendo en cuenta
    // que 
    navigate(`?q=${searchText}`);
  }

  const showAlert = () => {
    return (
      heroes.length === 0 && q.trim() !== ''
      ?
        <div className="alert alert-danger">
          No hero with <b>{q}</b>
        </div>
      :
        <></>
    )
  }

  const showInstructionSearch = () => {
    return (
      q.trim() === ''
      ?
        <div className="alert alert-primary">
          Search a hero
        </div>
      :
        <></>
    )
  }


  return (
    <>
      <h1>Search Page</h1>
      <hr />

      <div className="row">

        <div className="col-5">
          
          <h4> Searching </h4>
          <hr/>
          <form onSubmit={onSearchSubmit}>
            <input 
              type="text"
              placeholder="Search for a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              onChange={ onInputChange }
              value={searchText}
            />

            <button
              className="btn btn-outline-primary mt-1"
            >
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          
          <h4> Results </h4>
          <hr/>

          {
            showInstructionSearch()
          }


          {
            showAlert()
          }


          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero}/>
            ))
          }
        </div>
      </div>
    </>
  )
}
