import React, { Component } from 'react';
import AccessoryList from 'components/list/AccessoryList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as accessoryActions from 'store/modules/accessory';

class AccessoryListContainer extends Component {
  render() {
    const {accessoryWheres, history} = this.props;

    return (
      <AccessoryList accessoryWheres={accessoryWheres} history={history}/>
    );
  }
}

export default connect(
  (state) => ({
    accessoryWheres: state.accessory.toJS().accessoryWheres
  }),
  (dispatch) => ({
    AccessoryActions: bindActionCreators(accessoryActions, dispatch)
  })
)(AccessoryListContainer);