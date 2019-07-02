import React, {Fragment} from 'react';
import StoryChart from './storystructure/StoryChart'
import CardContainer from './storystructure/CardContainer'
import Checkbox from './storystructure/CheckBox'
import Title from './storystructure/Title'

function App(props) {

  return (
    <Fragment>
      <Title/>
      <StoryChart/>
      <Checkbox/>
      <CardContainer/>
    </Fragment>
  );
}

export default App;
