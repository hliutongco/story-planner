import React from 'react';
import {connect} from 'react-redux';
import StoryCard from './StoryCard'

const CardContainer = (props) => {
  return (
    <div className="card-container">
      {props.sectionTitles.map(title => <StoryCard key={title} title={title} description={props.storyStructure[title]}/>)}
    </div>
  )
}

const mapStateToProps = ({storyStructure, sectionTitles}) => ({storyStructure, sectionTitles})

export default connect(mapStateToProps)(CardContainer)
