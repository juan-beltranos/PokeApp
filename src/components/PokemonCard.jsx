import { usePokemon } from "../hooks/usePokemon"

export const PokemonCard = ({ pokemon }) => {

    const { name, picture, id } = pokemon
    const { isLoading, pokemonData } = usePokemon(id)
    const { abilities, moves, base_experience, sprites, types } = pokemonData

    console.log(pokemonData);

    return (
        <div className="border border-light rounded p-2 border-opacity-10 text-center " >
            <p className="text-light">Exp: {base_experience}</p>
            <img src={picture} width={'200px'} />
            <div className="card-body ">
                <div className="mt-3">
                    <h5 className=" text-uppercase text-danger">{name}</h5>
                </div>
                <h4>Sprites</h4>
                {
                    isLoading ? <div className="spinner-border text-danger" role="status"></div>
                        :
                        <div>
                            <img src={sprites.front_default} width={'100px'} />
                            <img src={sprites.front_shiny} width={'100px'} />
                        </div>
                }
                {
                    isLoading ? <div className="spinner-border text-danger" role="status"></div>
                        :
                        <div className="d-flex justify-content-evenly">
                            <h6 className="text-warning">Types:</h6>
                            {
                                types.map(doc => (
                                    <p key={doc.type.name} className="text-light">{doc.type.name}</p>
                                ))
                            }
                        </div>
                }
            </div>
            <button className="btn btn-danger">Ver perfil</button>
        </div>
    )
}
