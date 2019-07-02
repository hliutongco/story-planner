import React, {useState} from 'react';
import {connect} from 'react-redux';

const HoverCard = (props) => {
  const [hoverBoolean, toggleHover] = useState(false)

  const renderHoverText = () => {
      return hoverBoolean ? <p className="description">{props.storyStructure[props.sectionTitle]}</p> : null
  }

  return (
    <div onMouseEnter={() => toggleHover(true)}
    onMouseLeave={() => toggleHover(false)}
    className={props.sectionTitle === "exposition" ? 'first-div' : null}>
      {renderHoverText()}
      <p className="section-title">{props.sectionTitle}</p>
    </div>
  )
}

const mapStateToProps = ({storyStructure}) => ({ storyStructure })

 export default connect(mapStateToProps)(HoverCard);
