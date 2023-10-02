import {NextPage,GetStaticProps} from 'next';
import { Layout } from '@/components/layouts';
import { pokeApi } from '@/api';
import { PokemonListResponse, SmallPokemon } from '@/interfaces';
import { PokemonCard } from '@/components/pokemon';
import { Image } from '@nextui-org/react';

interface Props{
  pokemons:SmallPokemon[];
}

export const HomePage:NextPage<Props> = ({pokemons}) => {
  return (
    <>
        <Layout title="Listado de Pokemons">

          <div className="gap-2 grid grid-cols-2 sm:grid-cols-4"> 
            {
              pokemons.map((pokemon)=>(
                  <PokemonCard key={pokemon.id} pokemon={pokemon}/>

              ))
            }
          </div>
        </Layout>
    </>
  )
}

export const getStaticProps:GetStaticProps = async(ctx) =>{
  
  const {data}  = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  const pokemons:SmallPokemon[] = data.results.map((pokemon,id)=>({
      ...pokemon,
      id:id+1,
      img:  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id+1}.svg`
  }));

  return{
    props:{
      pokemons
    }
  }
}


export default HomePage;