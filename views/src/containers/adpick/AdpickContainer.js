import React, { Component } from 'react';
import Adpick from 'components/common/Adpick';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as commonActions from 'store/modules/common';

class AdpickContainer extends Component {

  componentDidMount() {
    const {CommonActions} = this.props;
    CommonActions.getAdPickList();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const currAdpickList = this.props.adpickList;
    const adpickList = nextProps.adpickList;
    
    return currAdpickList.length !== adpickList.length;
  }
  
  render() {
    const {adpickList} = this.props;
    
    return (
      <Adpick adpickList={adpickList}/>
    );
  }
}

export default connect(
  (state) => ({
    adpickList: state.common.toJS().adpickList
  }),
  (dispatch) => ({
    CommonActions: bindActionCreators(commonActions, dispatch)
  })
)(AdpickContainer);