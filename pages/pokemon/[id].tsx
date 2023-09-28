import { useState,useEffect } from "react";

import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";

import confetti  from 'canvas-confetti';

import { pokeApi } from "@/api";
import { Layout } from "@/components/layouts";
import { Pokemon } from "@/interfaces";
import {getPokemonInfo, localFavorites}  from '../../utils'

interface Props{
  pokemon:Pokemon

}


const PokemonPage:NextPage<Props> = ({pokemon}) => {
  
  const [isInFavorites, setIsInFavorites] = useState(localFavorites.existInFavorites(pokemon.id));

  const onToggleFavorite = () =>{
    localFavorites.toogleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);
    if(isInFavorites) return;
    confetti({
      zIndex:999,
      particleCount:100,
      spread:160,
      angle:-100,
      origin:{
        x:1,
        y:0
      }
    })
  }

  return (
    <Layout title={pokemon.name}>
        <div className="grid grid-cols-3 gap-2 mt-8 ">
          <Card shadow="sm" isHoverable={true}  isPressable onPress={() => console.log("item pressed")} >
              <CardBody className="overflow-visible p-0">
                <Image
                    shadow="sm"
                    radius="lg"
                    width='100%'
                    alt={pokemon.name}
                    className="w-full h-[200px]"
                    src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                  <b className='font-bold'>{pokemon.name}</b>
                  <p className="text-default-500">#{pokemon.id}</p>
              </CardFooter>
          </Card>
          <Card className="col-span-2 gap-2 grid grid-cols-1" shadow="sm">
              <div className=" flex justify-around mt-5">
                  <h2 className="text-2xl font-bold">{pokemon.name}</h2>
                  <Button 
                    onClick={onToggleFavorite} 
                    className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                    variant="ghost"
                    >
                    {isInFavorites ? 'En favoritos' : 'Guardar en favoritos'}
                  </Button>
              </div>
              <CardBody className="overflow-visible p-0">
                <h2 className="text-2xl flex flex-row justify-start ml-2">Sprites:</h2>
                <div className="grid grid-cols-4">
                  <Image
                      width='100px'
                      alt={pokemon.name}
                      className="w-full h-[100px]"
                      src={pokemon.sprites.front_default}
                  />
                  <Image
                      width='100px'
                      alt={pokemon.name}
                      className="w-full h-[100px]"
                      src={pokemon.sprites.back_default}
                  />
                  <Image
                      width='100px'
                      alt={pokemon.name}
                      className="w-full h-[100px]"
                      src={pokemon.sprites.front_shiny}
                  />
                  <Image
                      width='100px'
                      alt={pokemon.name}
                      className="w-full h-[100px]"
                      src={pokemon.sprites.back_shiny}
                  />
                </div>
              </CardBody>
          </Card>
        </div>
        
    </Layout>
  )
};

export const getStaticPaths:GetStaticPaths = async(ctx) => {
  
  const pokemons151 = [...Array(151)].map((value,index)=> `${index + 1}`);
  
  return {
    paths:pokemons151.map(id=>({params:{id}})),
    fallback:false
  }
}

export const getStaticProps:GetStaticProps = async({params}) =>{
  
  const {id} = params as {id:string};
  
  return{
    props:{
      pokemon:await getPokemonInfo(id)
    }
  }
}
export default PokemonPage;
