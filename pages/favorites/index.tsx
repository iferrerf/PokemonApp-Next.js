import { Layout } from "@/components/layouts"
import { FavoritePokemon } from "@/components/pokemon";
import { NoFavorites } from "@/components/ui/NoFavorites"
import { localFavorites } from "@/utils";
import { useEffect, useState } from "react"


export default function FavoritesPage() {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, [])

  return (
    <>
      <Layout title="Pókemons-Favoritos" />
      {
        favoritePokemons.length === 0
          ? <NoFavorites />
          : (<FavoritePokemon pokemons={favoritePokemons} />)
      }
    </>

  )
}