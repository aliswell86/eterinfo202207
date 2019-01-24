import React, { Component } from 'react';
import PlusUpLuckNotice from 'components/plusup/PlusUpLuckNotice';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as plusupActions from 'store/modules/plusup';

class PlusUpLuckNoticeContainer extends Component {
  render() {
    const {plusUpSimul} = this.props;
    const {plusUpLuck} = plusUpSimul;
    return (
      <PlusUpLuckNotice plusUpLuck={plusUpLuck}/>
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
)(PlusUpLuckNoticeContainer);