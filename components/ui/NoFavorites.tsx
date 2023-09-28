import { Image } from '@nextui-org/react'
import React from 'react'

export const NoFavorites = () => {
  return (
    <>
        <div className='container flex flex-col justify-center items-center 
                      self-center h-[calc(100vh-100px)] opacity-10'>
        <h1 className='text-2xl font-black'>No hay favoritos</h1>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
          width='250px'
          height='250px'
          
        />
      </div>
    </>
  )
}
