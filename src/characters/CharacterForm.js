import React from 'react';
import {connect} from 'react-redux'

const CharacterForm = (props) => {

  return (
    <div className="character-form">
      <form onSubmit={() => props.toggleView(false)}>
        <p>Name: <input type="text"/></p>
        Type: <select name="type">
          <option value="protagonist">Protagonist</option>
          <option value="antagonist">Antagonist</option>
          <option value="neutral">Neutral</option>
        </select>
        Character Arc: <select name="arc">
          <option value="transformation">Transformation Arc</option>
          <option value="change">Change Arc</option>
          <option value="none">None</option>
        </select>
        <p>Basic Description: <textarea/></p>
        <p>Major Character? <input type="checkbox"/></p>
        <input type="submit" />
      </form>
    </div>
  );
}


export default connect(null)(CharacterForm);
