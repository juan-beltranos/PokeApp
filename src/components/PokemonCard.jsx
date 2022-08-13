import { usePalette } from 'react-palette'
import { Link } from 'react-router-dom'

import img from '../assets/pokebola-blanca.png'

export const PokemonCard = ({ pokemon }) => {

    const { name, picture, id } = pokemon
    const { data } = usePalette(picture)

    return (
        <div className="border border-light rounded p-2 border-opacity-10 text-center text-light pe-auto" style={{ backgroundColor: data.darkVibrant, cursor: 'pointer' }}  >
            <Link to={`/pokemon/${id}`} className="text-light">
                <div className='d-flex align-items-center justify-content-between border-bottom p-2'>
                    <img src={img} alt="pobola" width={40} />
                    <p className='text-warning'>{id}</p>
                </div>
                <div className="card-body ">
                    <img src={picture} width={'100px'} />
                    <div className="mt-3">
                        <h5 className=" text-uppercase fw-bold">{name}</h5>
                    </div>
                </div>
            </Link>
        </div>
    )
}
