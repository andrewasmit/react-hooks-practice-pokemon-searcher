import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState("")

useEffect(()=>{
  fetch("http://localhost:3001/pokemon")
  .then(res=>res.json())
  .then(data=>setPokemonList(data))
}, []);

function handleNewPokemonSubmit(newPokemon){
  setPokemonList([...pokemonList, newPokemon])
}

// console.log("In PokePage: ", search)

  // Return JSX
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleNewPokemonSubmit={handleNewPokemonSubmit}/>
      <br />
      <Search search={search} setSearch={setSearch}/>
      <br />
      <PokemonCollection pokemonList={pokemonList} search={search}/>
    </Container>
  );
}

export default PokemonPage;
