import React, { Component } from 'react';
import AccessoryWhereBox from 'components/wherebox/AccessoryWhereBox';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as accessoryActions from 'store/modules/accessory';

class AccessoryWhereBoxContainer extends Component {

  getAccessoryList = async() => {
    const {AccessoryActions} = this.props;
    try {
      await AccessoryActions.getAccessoryList();
    } catch(e) {
      console.log(e);
    }
  }

  componentDidMount() {
    const {accessorys} = this.props;
    if(!accessorys.size > 0) this.getAccessoryList();
  }

  handleWhereSet = (e) => {
    const {name, checked} = e.target;
    const {accessorys, AccessoryActions} = this.props;
    AccessoryActions.setAccessoryWhere({name, checked});

    if(accessorys.size > 0) {
      AccessoryActions.getAccessoryWhereList();
    }else{
      this.getAccessoryList();
    }
  }

  render() {
    const {handleWhereSet} = this;
    const {accessoryWhere, loading} = this.props;
    
    return (
      <AccessoryWhereBox
      handleWhereSet={handleWhereSet}
      accessoryWhere={accessoryWhere}
      loading={loading}/>
    );
  }
}

export default connect(
  (state) => ({
    accessoryWhere: state.accessory.toJS().accessoryWhere,
    accessorys: state.accessory.get('accessorys'),
    loading: state.pender.pending['accessory/GET_ARMMOR_LIST']
  }),
  (dispatch) => ({
    AccessoryActions: bindActionCreators(accessoryActions, dispatch)
  })
)(AccessoryWhereBoxContainer);