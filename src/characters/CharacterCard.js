import React from 'react';
import {connect} from 'react-redux'

const CharacterCard = (props) => {
  const {character} = props
  return (
    <div className="character-card">
      <h3>{character.name}</h3>
      <ul>
        <li>Type: {character.type}</li>
        <li>Arc: {character.arc}</li>
        <li>Major Character: {character.majorCharacter ? "Yes" : "No"}</li>
      </ul>
      <p>{character.description}</p>
    </div>
  );
}


export default connect(null)(CharacterCard);
