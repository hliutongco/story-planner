import React, {Fragment, useState} from 'react';
import {connect} from 'react-redux'
import StoryChart from '../storystructure/StoryChart'
import CharacterContainer from '../characters/CharacterContainer'
import CardContainer from '../storystructure/CardContainer'
import Checkbox from '../storystructure/CheckBox'
import Title from '../storystructure/Title'

const Home = (props) => {
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
    <div className="homepage">

      <Title/>
      {renderButtons()}
      { viewStory ? renderStory() : <CharacterContainer/> }
    </div>
  );
}


export default connect(null)(Home);
