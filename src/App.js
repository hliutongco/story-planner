import React, {Fragment, useState} from 'react';
import StoryChart from './storystructure/StoryChart'
import CharacterContainer from './characters/CharacterContainer'
import CardContainer from './storystructure/CardContainer'
import Checkbox from './storystructure/CheckBox'
import Title from './storystructure/Title'

function App(props) {
  const [viewStory, toggleView] = useState(true)

  const renderButtons = () => {
    return (
      <Fragment>
        <button onClick={() => toggleView(true)}>Story</button>
        <button onClick={() => toggleView(false)}>Characters</button>
      </Fragment>
    )
  }

  const renderStory = () => {
    return (
      <Fragment>
        <StoryChart/>
        <Checkbox/>
        <CardContainer/>
      </Fragment>
    )
  }

  return (
    <Fragment>
      <Title/>
      {renderButtons()}
      { viewStory ? renderStory() : <CharacterContainer/> }
    </Fragment>
  );
}

export default App;
