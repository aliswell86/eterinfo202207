import React, { Component } from 'react';
import CostumeWhereBox from 'components/wherebox/CostumeWhereBox';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as costumeActions from 'store/modules/costume';

class CostumeWhereBoxContainer extends Component {

  getCostumeList = async() => {
    const {CostumeActions} = this.props;
    try {
      await CostumeActions.getCostumeList();
    } catch(e) {
      console.log(e);
    }
  }

  componentDidMount() {
    const {costumes} = this.props;
    if(!costumes.size > 0) this.getCostumeList();
  }

  handleWhereSet = (e) => {
    const {name, checked} = e.target;
    const {costumes, CostumeActions} = this.props;
    
    CostumeActions.setCostumeWhere({name, checked});

    if(costumes.size > 0) {
      CostumeActions.getCostumeWhereList();
    }else{
      this.getCostumeList();
    }
  }

  render() {
    const {handleWhereSet} = this;
    const {costumeWhere, loading} = this.props;
    
    return (
      <CostumeWhereBox
      handleWhereSet={handleWhereSet}
      costumeWhere={costumeWhere}
      loading={loading}/>
    );
  }
}

export default connect(
  (state) => ({
    costumeWhere: state.costume.toJS().costumeWhere,
    costumes: state.costume.get('costumes'),
    loading: state.pender.pending['costume/GET_COSTUME_LIST']
  }),
  (dispatch) => ({
    CostumeActions: bindActionCreators(costumeActions, dispatch)
  })
)(CostumeWhereBoxContainer);