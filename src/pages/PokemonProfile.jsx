import { useParams } from "react-router-dom";
import { usePokemon } from "../hooks/usePokemon";
import { usePalette } from "react-palette";

export const PokemonProfile = () => {
    const { id } = useParams();
    const { isLoading, pokemonData } = usePokemon(id);
    const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;
    const { data } = usePalette(picture);
    const { name, sprites } = pokemonData;

    console.log(pokemonData);

    return (
        <div
            className="text-center text-light rounded"
            style={{ backgroundColor: data.darkVibrant, width: "100%" }}
        >
            <img src={picture} alt={name} style={{ width: "35%" }} />

            {isLoading ? (
                <div class="spinner-border text-danger" role="status"></div>
            ) : (
                <div className="card-body">
                    <h2 className="card-title mb-3">{name}</h2>
                    <p className="card-text">SPRITES</p>
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
            )}
        </div>
    );
};
