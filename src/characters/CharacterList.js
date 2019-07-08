import React from 'react';
import CharacterCard from './CharacterCard'
import {connect} from 'react-redux'

const CharacterList = (props) => {

  return (
    <div className="character-list">
      {props.characters.map(character => <CharacterCard key={character.name} character={character}/>)}
    </div>
  );
}

const mapStateToProps = ({characters}) => ({characters})

export default connect(mapStateToProps)(CharacterList);
