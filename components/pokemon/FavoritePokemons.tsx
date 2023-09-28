import { FC } from "react";
import { FavoriteCardsPokemons } from "./FavoriteCardsPokemons";


interface Props{
  pokemons:number[]
}

export const FavoritePokemons:FC<Props> = ({pokemons}) => {
  return (
    <div className='container flex flex-row justify-start grid lg:grid-cols-5  sm:grid-cols-3'>
    {
        pokemons.map(id => (
          <FavoriteCardsPokemons key={id} pokemonId={id}/>
        ))
    }
    </div>
  )
}
