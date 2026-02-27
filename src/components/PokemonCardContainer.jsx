import PokemonCard from "./PokemonCard";
import { useOutletContext } from 'react-router-dom'

const PokemonCardContainer = () => {
    const { pokemonData } = useOutletContext()
    return(
        <div
          id="cardHolder"
          className="flex flex-wrap gap-6 min-h-[35vmin] justify-center items-center border-6 border-black-600 rounded-xl bg-amber-700"
        >
        {
          pokemonData.map((pokemon)=>(
            < PokemonCard 
              key={pokemon.id}
              imgSrc={pokemon.sprites.front_default}
              shinyImgSrc={pokemon.sprites.front_shiny}
              pokeName={pokemon.name}
              pokemonId={pokemon.id}
              shiny={pokemon.shiny}
            />
          ))
        }
      </div>
    )
}

export default PokemonCardContainer;