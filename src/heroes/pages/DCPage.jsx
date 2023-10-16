import { HeroList } from "../components"

export const DCPage = () => {
  return (
    <>
      <h1>DC Comics</h1>

      <p>
        DC Comics is one of the largest and oldest American comic book companies, with their first comic under the DC banner <br />
        being published in 1937. 
      </p>

      <hr/>

      <HeroList publisher='DC Comics'/>
    </>
  )
}
