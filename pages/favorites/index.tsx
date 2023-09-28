import { Layout } from '@/components/layouts'
import { FavoritePokemons } from '@/components/pokemon';
import { NoFavorites } from '@/components/ui';
import { localFavorites } from '@/utils';
import { useEffect, useState } from 'react';



const FavoritesPage = () => {

  const [favoritePokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons());
  }, [])
  


  return (
    <Layout title='Pokemons - Favoritos'>

      {
        favoritePokemons.length === 0
        ? (<NoFavorites/>)
        : (<FavoritePokemons pokemons={favoritePokemons}/>)
      }

      
    </Layout>
  )
}

export default FavoritesPage;
