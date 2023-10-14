import { useMemo } from 'react';
import { getHeroesByPublisher } from '../helpers'
import { HeroCard } from './';

export const HeroList = ({publisher}) => {

    // el useMemo es un hook que permite memorizar acciones para solo permitir
    // renderizar el componente en el momento que el valor asignado para el cambio
    // pues... cambie.
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  
    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
            {heroes.map((heroe) => {
                return <HeroCard key={heroe.id} {...heroe}/>          
            })}
        </div>
    )
}
