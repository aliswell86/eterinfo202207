import React, { Component } from 'react';
import MyInfoView from 'components/myspec/MyInfoView';
import {connect} from 'react-redux';

class MyInfoViewContainer extends Component {
  render() {
    const {myStat} = this.props;

    return (
      <MyInfoView
        myStat={myStat}/>
    );
  }
}

export default connect(
  (state) => ({
    myStat: state.myspec.toJS().myStat
  }),
  (dispatch) => ({
    
  })
)(MyInfoViewContainer);