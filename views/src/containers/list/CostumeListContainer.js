import React, { Component } from 'react';
import CostumeList from 'components/list/CostumeList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as costumeActions from 'store/modules/costume';

class CostumeListContainer extends Component {
  render() {
    const {costumeWheres, history} = this.props;

    return (
      <CostumeList costumeWheres={costumeWheres} history={history}/>
    );
  }
}

export default connect(
  (state) => ({
    costumeWheres: state.costume.toJS().costumeWheres
  }),
  (dispatch) => ({
    CostumeActions: bindActionCreators(costumeActions, dispatch)
  })
)(CostumeListContainer);