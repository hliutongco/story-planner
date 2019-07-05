import React, {useState} from 'react';
import CharacterForm from './CharacterForm'
import CharacterList from './CharacterList'
import {connect} from 'react-redux'

const CharacterContainer = (props) => {
  const [viewForm, toggleView] = useState(false)

  return (
    <div className="character-container">
      <p><button onClick={() => toggleView(true)}>Create a Character</button></p>
      {viewForm ? <CharacterForm toggleView={toggleView}/> : null}
      <CharacterList/>
    </div>
  );
}


export default connect(null)(CharacterContainer);
