import PokemonGrid from "@/app/pokemons/components/PokemonGrid";
import { PokemonsResponse } from "@/app/pokemons/interfaces/pokemons-response";
import { SimplePokemon } from "@/app/pokemons/interfaces/simple-pokemon";


export const metadata = {
    title: 'favoritos',
    description: 'Listado de favoritos',
};

export default async function PokemonsPage() {

    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2 text-center">Pokémons Favoritos <small className="text-blue-500">Global State</small> </span>
            
            <PokemonGrid pokemons={[]} />

        </div>
    )
}
