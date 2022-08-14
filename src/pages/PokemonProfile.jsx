import { useParams } from "react-router-dom";
import { usePokemon } from "../hooks/usePokemon";
import { usePalette } from "react-palette";

export const PokemonProfile = () => {
    const { id } = useParams();
    const { isLoading, pokemonData } = usePokemon(id);
    const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;
    const { data } = usePalette(picture);
    const { name, sprites, base_experience, abilities, types, weight } = pokemonData;

    console.log(pokemonData);

    return (
        <div
            className="text-center text-light fw-bold p-3 text-capitalize"
            style={{ backgroundColor: data.darkVibrant, width: "100vw", height: '100vh' }}
        >
            <p className="text-start">{base_experience} CP</p>
            <img src={picture} alt={name} style={{ width: "50%" }} />
            <h2 className="mt-2 mb-3">{name}</h2>
            <p>weight: {weight}</p>

            {
                isLoading ? (
                    <div className="spinner-border text-danger" role="status"></div>
                ) : (
                    <div className="card-body border p-2 " style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>

                        <div className="d-flex justify-content-evenly">
                            <p className="card-text text-warning">abilities</p>
                            {
                                abilities.map(({ ability }) => (
                                    <p key={ability.name}>{ability.name}</p>

                                ))
                            }
                        </div>

                        <div className="d-flex justify-content-evenly">
                            <p className="card-text text-warning">types</p>
                            {
                                types.map(({ type }) => (
                                    <p key={type.name}>{type.name}</p>

                                ))
                            }
                        </div>

                        <p className="card-text mb-0 text-warning">sprites</p>
                        <div className="d-flex justify-content-evenly">
                            <img
                                src={sprites.front_default}
                                alt={name}
                                style={{ width: "150px" }}
                            />
                            <img
                                src={sprites.back_default}
                                alt={name}
                                style={{ width: "150px" }}
                            />
                            <img
                                src={sprites.front_shiny}
                                alt={name}
                                style={{ width: "150px" }}
                            />
                            <img
                                src={sprites.back_shiny}
                                alt={name}
                                style={{ width: "150px" }}
                            />
                        </div>

                    </div>
                )
            }
        </div>
    );
};
