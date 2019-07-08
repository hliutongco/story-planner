import React, {useState} from 'react';
import {addCharacter} from '../redux/actions';
import {connect} from 'react-redux';

const CharacterForm = (props) => {
  const [formData, changeData] = useState({
    arc: "Transformation",
    type: "Protagonist",
    majorCharacter: false
  })

  const handleChange = (event) => {
    const checkboxObj = {[event.target.name]: event.target.checked}
    const regularDataObj = {[event.target.name]: event.target.value}
    const newData = event.target.name === "majorCharacter" ? checkboxObj : regularDataObj
    changeData(Object.assign(formData, newData))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.createCharacter(formData)
    props.toggleView(false)
  }

  return (
    <div className="character-form">
      <form onSubmit={handleSubmit}>
        <p>Name: <input onChange={handleChange} name="name" type="text"/></p>
        Type: <select onChange={handleChange} name="type">
          <option value="Protagonist">Protagonist</option>
          <option value="Antagonist">Antagonist</option>
          <option value="Neutral">Neutral</option>
        </select>
        Character Arc: <select onChange={handleChange} name="arc">
          <option value="Transformation">Transformation Arc</option>
          <option value="Change">Change Arc</option>
          <option value="None">None</option>
        </select>
        <p>Basic Description: <textarea name="description" onChange={handleChange}/></p>
        <p>Major Character? <input name="majorCharacter" onChange={handleChange} type="checkbox"/></p>
        <input type="submit" />
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    createCharacter: (character) => dispatch(addCharacter(character))
  }
}


export default connect(null, mapDispatchToProps)(CharacterForm);
