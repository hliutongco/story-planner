import React, {useState} from 'react';


const HoverCard = (props) => {
  const [description, changeDescription] = useState("Please add a description.")
  const [hoverBoolean, toggleHover] = useState(false)

  const renderHoverText = () => {
      return hoverBoolean ? <p className="description">{description}</p> : null
  }

  return (
    <div onMouseEnter={() => toggleHover(true)}
    onMouseLeave={() => toggleHover(false)}>
      {renderHoverText()}
      <p className="section-title">{props.sectionTitle}</p>
    </div>
  )
}
 export default HoverCard;
