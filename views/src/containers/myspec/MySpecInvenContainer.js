import React, { Component } from 'react';
import MySpecInven from 'components/myspec/MySpecInven';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as myspecActions from 'store/modules/myspec';

class MySpecInvenContainer extends Component {

  handleChange = (e) => {
    const {MySpecActions} = this.props;
    const {name, value} = e.target;
    
    if(Number(value) > -1 && Number(value) < 1000) {
      MySpecActions.setMyStat({name, value});
    }
  }

  render() {
    const {handleChange} = this;
    const {myStat} = this.props;
    return (
      <MySpecInven myStatInsert={handleChange} myStat={myStat}/>
    );
  }
}

export default connect(
  (state) => ({
    myStat: state.myspec.toJS().myStat
  }),
  (dispatch) => ({
    MySpecActions: bindActionCreators(myspecActions, dispatch)
  })
)(MySpecInvenContainer);