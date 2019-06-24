import React, { Component } from 'react';
import PlusUpGrid from 'components/plusup/PlusUpGrid';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as plusupActions from 'store/modules/plusup';

class PlusUpGridContainer extends Component {

  getPlusUpGrid() {
    const {PlusupActions, plusUpGrid} = this.props;

    if(plusUpGrid.length !== 3) {
      PlusupActions.getPlusUpGrid();
    }
  }

  componentDidMount() {
    this.getPlusUpGrid();

    window.scrollTo(0, 0);
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    const {PlusupActions, plusUpGrid} = this.props;
    PlusupActions.setPlusUpGridWhere({name, value});
    
    if(plusUpGrid.length === 3) { //일반,원피스,변이
      PlusupActions.getPlusUpGridWhere();
    }
  }

  costUpdate = (e) => {
    const {name, value} = e.target;
    const {PlusupActions} = this.props;

    PlusupActions.setPlusUpCost({name, value});
  }

  render() {
    const {plusupGrid, loading, currPlusUp, plusUpCost} = this.props;
    const {handleChange, costUpdate} = this;
    
    return (
      <PlusUpGrid
      plusupGrid={plusupGrid}
      loading={loading}
      wherePlusUpGrid={handleChange}
      currPlusUp={currPlusUp}
      plusUpCost={plusUpCost}
      costUpdate={costUpdate}/>
    );
  }
}

export default connect(
  (state) => ({
    plusUpGrid: state.plusup.toJS().plusUpGrid,
    loading: state.pender.pending['plusup/GET_PLUSUP_GRID'],
    currPlusUp: state.plusup.toJS().currPlusUp,
    plusUpCost: state.plusup.toJS().plusUpCost
  }),
  (dispatch) => ({
    PlusupActions: bindActionCreators(plusupActions, dispatch)
  })
)(PlusUpGridContainer);