import React, { Component } from 'react';
import ArmmorWhereBox from 'components/wherebox/ArmmorWhereBox';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as armmorActions from 'store/modules/armmor';

class ArmmorWhereBoxContainer extends Component {

  getArmmorList = async() => {
    const {ArmmorActions} = this.props;
    try {
      await ArmmorActions.getArmmorList();
    } catch(e) {
      console.log(e);
    }
  }

  componentDidMount() {
    const {armmors} = this.props;
    if(!armmors.size > 0) this.getArmmorList();
  }

  handleWhereSet = (e) => {
    const {name, value, checked} = e.target;
    const {armmors, ArmmorActions} = this.props;

    if(name === 'clyn' || name === 'stype2') {
      ArmmorActions.setArmmorWhere({name, value});
    }else{
      ArmmorActions.setArmmorWhere({name, checked});
    }

    if(armmors.size > 0) {
      ArmmorActions.getArmmorWhereList();
    }else{
      this.getArmmorList();
    }
  }

  render() {
    const {handleWhereSet} = this;
    const {armmorWhere, loading} = this.props;
    
    return (
      <ArmmorWhereBox
      handleWhereSet={handleWhereSet}
      armmorWhere={armmorWhere}
      loading={loading}/>
    );
  }
}

export default connect(
  (state) => ({
    armmorWhere: state.armmor.toJS().armmorWhere,
    armmorWheres: state.armmor.toJS().armmorWheres,
    armmors: state.armmor.get('armmors'),
    loading: state.pender.pending['armmor/GET_ARMMOR_LIST']
  }),
  (dispatch) => ({
    ArmmorActions: bindActionCreators(armmorActions, dispatch)
  })
)(ArmmorWhereBoxContainer);