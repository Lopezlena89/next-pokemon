import { Card, Image } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { FC } from 'react';


interface Props{
  pokemonId:number
}


export const FavoriteCardsPokemons:FC<Props>= ({pokemonId}) => {

  const router = useRouter();

  const onFavoriteClick = () => {
    router.push(`/pokemon/${pokemonId}`)
  }

  return (
    <div  className='ml-5 mt-3'>
        <Card onClick={onFavoriteClick} shadow="sm"  isPressable onPress={() => console.log("item pressed")}>
          <Image
              shadow="sm"
              radius="lg"
              width='100%'
              className="w-screen h-[200px]"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          />
        </Card>
    </div>
  )
}
