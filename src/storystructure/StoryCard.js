import React, {Fragment, useState} from 'react';
import {connect} from 'react-redux';
import {saveDescription} from '../redux/actions'

const StoryCard = (props) => {
  const [clicked, toggleClicked] = useState(false)
  const [description, changeDescription] = useState(props.description)

  const handleSubmit = () => {
    props.saveChanges(props.title, description)
    toggleClicked(false)
  }

  const editForm = (<Fragment>
      <h3>{props.title.toUpperCase()}</h3>
      <textarea value={description} onChange={(event) => changeDescription(event.target.value)}/>
      <p><button onClick={handleSubmit}>Submit</button></p>
    </Fragment>)

  const regularView =   (
      <Fragment>
        <h3>{props.title.toUpperCase()}</h3>
        <p>{description}</p>
        <button onClick={() => toggleClicked(true)}>Edit</button>
      </Fragment>
    )

  const renderContent = () => {
    return clicked ? editForm : regularView
  }

  return (
    <div className="story-card">
      {renderContent()}
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveChanges: (title, description) => dispatch(saveDescription(title, description))
  }
}

export default connect(null, mapDispatchToProps)(StoryCard)
