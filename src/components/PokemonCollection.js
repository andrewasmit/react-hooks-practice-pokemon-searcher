import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonList, search }) {

  const pokemonToDisplay = pokemonList.filter(p=>p.name.toLowerCase().includes(search.toLowerCase()))
  .map(pokemon=>{
    return <PokemonCard 
              hp ={pokemon.hp}
              key={pokemon.id}
              myKey={pokemon.id}
              name={pokemon.name}
              frontImg={pokemon.sprites.front}
              backImg={pokemon.sprites.back}
            />
  })


  // Return JSX
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokemonToDisplay}
    </Card.Group>
  );
}

export default PokemonCollection;
