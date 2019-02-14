import React, { Component } from 'react';
import ArmmorList from 'components/list/ArmmorList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as armmorActions from 'store/modules/armmor';

class ArmmorListContainer extends Component {
  render() {
    const {armmorWheres, history} = this.props;

    return (
      <ArmmorList armmorWheres={armmorWheres} history={history}/>
    );
  }
}

export default connect(
  (state) => ({
    armmorWheres: state.armmor.toJS().armmorWheres
  }),
  (dispatch) => ({
    ArmmorActions: bindActionCreators(armmorActions, dispatch)
  })
)(ArmmorListContainer);