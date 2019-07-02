import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import {changeTheTurn} from '../redux/actions';

const CheckBox = (props) => {
  const {changeTheTurn} = props
  const [checkedBoolean, changeChecked] = useState(false)
  useEffect(() => { checkedBoolean ? changeTheTurn(true) : changeTheTurn(false) }, [checkedBoolean, changeTheTurn])

  return (
    <div>
      <input type="checkbox" checked={checkedBoolean} onChange={() => changeChecked(!checkedBoolean)}/>
      Disable The Turn?
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {

  return {
    changeTheTurn: (boolean) => dispatch(changeTheTurn(boolean))
  }
}

export default connect(null, mapDispatchToProps)(CheckBox);
