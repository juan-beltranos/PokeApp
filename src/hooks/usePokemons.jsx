import { useEffect, useState } from 'react'
import { pokeApi } from '../api/pokeApi'

export const usePokemons = () => {

    const [pokemon, setPokemon] = useState([])
    const pokeData = []

    useEffect(() => {
        getPokemons()
    }, [])

    const getPokemons = async () => {
        try {
            const res = await pokeApi.get('https://pokeapi.co/api/v2/pokemon?limit=10')
            setPokemon(res.data.results)
        } catch (error) {
            console.log(error);
        }
    }

    pokemon.forEach(poke => {
        const { name, url } = poke
        const id = url.split('/')[6]
        const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`

        pokeData.push({ id, name, picture })
    })

    return { pokeData }

}
