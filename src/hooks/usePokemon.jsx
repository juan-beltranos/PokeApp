import { useEffect, useState } from "react"
import { pokeApi } from "../api/pokeApi"

export const usePokemon = (id) => {

    const [ isLoading, setIsLoding ] = useState(true)
    const [ pokemonData, setPokemonData ] = useState({})

    const loadPokemon = async () => {
        const res = await pokeApi.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        setPokemonData(res.data)
        setIsLoding(false)
    }

    useEffect(() => {
        loadPokemon()
    }, [])

    return { isLoading, pokemonData }

}
