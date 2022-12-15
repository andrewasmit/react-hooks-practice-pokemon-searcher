import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ hp, myKey, name, frontImg, backImg }) {

  const [isFront, setIsFront] = useState(true)



  // Return JSX
  return (
    <Card id={myKey}>
      <div>
        <div className="image">
          <img alt={name} src={ isFront ? frontImg : backImg} onClick={()=>setIsFront(!isFront)}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
