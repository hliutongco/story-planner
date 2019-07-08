import React, {useState} from 'react';
import CharacterCard from './CharacterCard'
import {connect} from 'react-redux'

const CharacterList = (props) => {
  const [filterValues, changeFilters] = useState({
    type: "No Filter",
    importance: "No Filter",
    arc: "No Filter"
  })

  const handleChange = (event) => {
    const newFiltersObj = {...filterValues, [event.target.name]: event.target.value}
    changeFilters(newFiltersObj)
  }

  const characterFilters = () => {
    return (
      <div>
        Pro/Antagonists <select onChange={handleChange} checked={filterValues.protagonists} type="dropdown" name="type">
          <option value="No Filter">No Filter</option>
          <option value="Protagonist">Protagonist</option>
          <option value="Antagonist">Antagonist</option>
          <option value="Neutral">Neutral</option>
        </select>
        Major/Minor Characters <select onChange={handleChange} checked={filterValues.majorCharacters} type="dropdown" name="importance">
          <option value="No Filter">No Filter</option>
          <option value="Major Character">Major Character</option>
          <option value="Minor Character">Minor Character</option>
        </select>
        Arc Type <select onChange={handleChange} checked={filterValues.transformationArcs} type="dropdown" name="arc">
          <option value="No Filter">No Filter</option>
          <option value="Transformation">Transformation</option>
          <option value="Change">Change</option>
          <option value="None">None</option>
        </select>
      </div>
    )
  }

  const applyFilters = (character) => {
    const typeFilter = filterValues.type === "No Filter" ? true : character.type === filterValues.type
    const arcFilter = filterValues.arc === "No Filter" ? true : character.arc === filterValues.arc

    const importanceFilter = () => {
      switch(filterValues.importance){
        case "Major Character":
          return character.majorCharacter
        case "Minor Character":
          return !character.majorCharacter
        default:
          return true
      }
    }

    return typeFilter && importanceFilter() && arcFilter
  }

  const renderCharacters = () => {
    const filteredCharacters = props.characters.filter(character => applyFilters(character))
    return filteredCharacters.map(character => <CharacterCard key={character.name} character={character}/>)
  }

  return (
    <div className="character-list">
      {characterFilters()}
      {renderCharacters()}
    </div>
  );
}

const mapStateToProps = ({characters}) => ({characters})

export default connect(mapStateToProps)(CharacterList);
