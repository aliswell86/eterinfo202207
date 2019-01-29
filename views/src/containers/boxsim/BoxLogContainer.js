import React, { Component } from 'react';
import BoxLog from 'components/boxsim/BoxLog';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as boxsimulActions from 'store/modules/boxsim';

class BoxLogContainer extends Component {
  render() {
    const {packageName, boxResultListWhere} = this.props;

    return (
      <BoxLog
      packageName={packageName}
      boxResultListWhere={boxResultListWhere}/>
    );
  }
}

export default connect(
  (state) => ({
    packageName: state.boxsim.toJS().currBox.packageName,
    boxResultListWhere: state.boxsim.toJS().boxResultListWhere
  }),
  (dispatch) => ({
    BoxSimulActions: bindActionCreators(boxsimulActions, dispatch)
  })
)(BoxLogContainer);