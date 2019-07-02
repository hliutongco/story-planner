import React, {useState} from 'react';
import {connect} from 'react-redux'
import {changeTheTitle} from '../redux/actions';

const Title = (props) => {
  const {title} = props
  const [clicked, toggleClicked] = useState(false)
  const [userInput, changeInput] = useState(title)

  const handleSubmit = () => {
    props.changeTheTitle(userInput)
    toggleClicked(false)
  }

  return (
    <div className="title-container">
      <h2>{title}</h2>
      <button onClick={() => toggleClicked(true)}>Edit Title</button>
      <br/>
      <input type="text" value={userInput} onChange={(event) => changeInput(event.target.value)} />
      <br/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

const mapStateToProps = ({title}) => ({title})

const mapDispatchToProps = (dispatch) => {

  return {
    changeTheTitle: (userInput) => dispatch(changeTheTitle(userInput))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Title);
