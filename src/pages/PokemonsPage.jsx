import { PokemonCard } from "../components/PokemonCard.jsx"
import { usePokemons } from "../hooks/usePokemons.jsx"

export const PokemonsPage = () => {

    const { pokeData } = usePokemons()

    return (
        <div className="container row">
            {
                pokeData.map(poke => (
                    <div className="col-md-4 mb-2" key={poke.id}>
                        <PokemonCard
                            pokemon={poke}
                        />
                    </div>
                ))
            }
        </div>
    )
}
