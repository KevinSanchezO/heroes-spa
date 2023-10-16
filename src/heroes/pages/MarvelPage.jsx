import { HeroList } from "../components";

export const MarvelPage = () => {
  return (
    <>
      <h1>Marvel Comics</h1>

      <p>
        Marvel was founded in 1939 by Martin Goodman as Timely Comics and by 1951 had generally become known as Atlas Comics.<br/>
        The Marvel era began in June 1961 with the launch of The Fantastic Four and other superhero titles created by <br />
        Stan Lee, Jack Kirby, Steve Ditko, and many others.
      </p>

      <hr />
    
      <HeroList publisher='Marvel Comics'/>
    </>
  )
}
