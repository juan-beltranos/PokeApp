import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { PokemonProfile } from "./pages/PokemonProfile";
import { PokemonsPage } from "./pages/PokemonsPage";

export const App = () => {

  return (

    <div className=" ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PokemonsPage />} />
          <Route path="pokemon/:id" element={<PokemonProfile />} />

        </Routes>
      </BrowserRouter>

    </div>
  )
}
