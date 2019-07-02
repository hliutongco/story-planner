import React from 'react';
import {connect} from 'react-redux';
import storyImg from './story-structure.png';
import HoverCard from './HoverCard'

const StoryChart = (props) => {

  const renderHoverCards = () => {
    return props.sectionTitles.map(title => <HoverCard key={title} sectionTitle={title} />)
  }

  return (
    <div className="story-structure-container">
      <img alt="story structure" src={storyImg}/>
      <div className="invisible-hover">
        {renderHoverCards()}
      </div>
    </div>
  );
}

const mapStateToProps = ({sectionTitles}) => ({sectionTitles})

export default connect(mapStateToProps)(StoryChart);
