import React, { Component } from 'react';
import PlusUpSimul from 'components/plusup/PlusUpSimul';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as plusupActions from 'store/modules/plusup';

class PlusUpSimulContainer extends Component {

  setPlusUpKit = (cnt) => {
    const {PlusupActions} = this.props;
    PlusupActions.setPlusUpKit(cnt);
  }

  plusUpGo() {
    
  }

  render() {
    const {setPlusUpKit, plusUpGo} = this;
    const {plusUpSimul} = this.props;

    return (
      <PlusUpSimul
      setPlusUpKit={setPlusUpKit}
      plusUpSimul={plusUpSimul}
      plusUpGo={plusUpGo}/>
    );
  }
}

export default connect(
  (state) => ({
    plusUpSimul: state.plusup.toJS().plusUpSimul
  }),
  (dispatch) => ({
    PlusupActions: bindActionCreators(plusupActions, dispatch)
  })
)(PlusUpSimulContainer);