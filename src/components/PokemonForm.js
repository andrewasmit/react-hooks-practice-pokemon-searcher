import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ handleNewPokemonSubmit }) {

  const [newName, setNewName] = useState("");
  const [newHp, setNewHp] = useState("");
  const [newFrontImg, setNewFrontImg] = useState("")
  const [newBackImg, setNewBackImg] = useState("");


  function handleFormSubmit(e){
    e.preventDefault();
    const newPokemon = {
      name: newName,
      hp: newHp,
      sprites:{
        front: newFrontImg,
        back: newBackImg
      }
    }
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemon)
    })
    .then(res=>res.json())
    .then(data=>handleNewPokemonSubmit(data))
    setNewName("")
    setNewHp("")
    setNewFrontImg("")
    setNewBackImg("")
  }


  // Return JSX
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleFormSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
              fluid label="Name" 
              placeholder="Name" 
              name="name" 
              value={newName}
              onChange={e=>setNewName(e.target.value)}
          />
          <Form.Input 
              fluid label="hp" 
              placeholder="hp" 
              name="hp" 
              value={newHp}
              onChange={e=>setNewHp(e.target.value)}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={newFrontImg}
            onChange={e=>setNewFrontImg(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={newBackImg}
            onChange={e=>setNewBackImg(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
