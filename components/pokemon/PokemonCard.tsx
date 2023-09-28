import { SmallPokemon } from "@/interfaces"
import { Card, CardBody, CardFooter,Image } from "@nextui-org/react"
import { useRouter } from "next/router"

import { FC } from "react"

interface Props{
    pokemon:SmallPokemon
}

export const PokemonCard:FC<Props> = ({pokemon}) => {

    const router = useRouter();

    const onClick = () =>{
        router.push(`/name/${pokemon.name}`)
    }


  return (
    <>
        <Card shadow="sm"  isPressable onPress={() => console.log("item pressed")} >
            <CardBody onClick={onClick} className="overflow-visible p-0">
            <Image
                shadow="sm"
                radius="lg"
                width='100%'
                alt={pokemon.name}
                className="w-full h-[240px]"
                src={pokemon.img}
            />
            </CardBody>
            <CardFooter className="text-small justify-between">
                <b className='font-bold'>{pokemon.name}</b>
                <p className="text-default-500">#{pokemon.id}</p>
            </CardFooter>
        </Card>
    </>
  )
}
