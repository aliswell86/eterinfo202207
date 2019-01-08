import React, { Component } from 'react';
import PlusUpSimul from 'components/plusup/PlusUpSimul';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as plusupActions from 'store/modules/plusup';

class PlusUpSimulContainer extends Component {

  plusUpGoKey = (e) => {
    if(e.key === 'Enter') {
      this.plusUpGo();
    }
  }

  plusUpGoKeyF = (e) => {
    if(e.key === 'Enter') {
      this.plusUpGoF();
    }
  }

  plusUpGo = () => {
    const {PlusupActions} = this.props;
    const {plusUpLuck, simulCurrPlusUp, upTryCnt, usePlusUpKit, usePlusUpKitF, bestPlusUp, resultComment} = this.props.plusUpSimul;
    const {luck} = plusUpLuck[Number(simulCurrPlusUp)];
    const random = Math.floor(Math.random() * 1000) + 1;
    const {success, fail} = luck;
    let upTryCntBefore = upTryCnt;
    let currPlusUpBefore = Number(simulCurrPlusUp);
    let resultCommentBefore = resultComment;
    let usePlusUpKitBefore = usePlusUpKit;
    let usePlusUpKitFBefore = usePlusUpKitF;
    let bestPlusUpBefore = bestPlusUp;

    if(Number(usePlusUpKit) <= 0) {
      resultCommentBefore = '남아있는 플러스업 아이템이 없습니다.';
    }else{
      usePlusUpKitBefore = Number(usePlusUpKit) - 1; // 플업 1개소모
      upTryCntBefore = String(Number(upTryCnt) + 1); // 시도 횟수증가

      if(random <= Number(success)) {
        currPlusUpBefore += 1;
        resultCommentBefore = '플러스업 ' + (Number(simulCurrPlusUp) + 1) + '강에 성공했습니다 !!';
      }else if(random <= Number(fail)) {
        const txt = '플러스업 ' + (Number(simulCurrPlusUp) + 1) + '강에 실패했습니다.';      
        resultCommentBefore = simulCurrPlusUp === '0' ? txt : txt + ' 강화상태는 유지됩니다.';
      }else{
        const txt = '플러스업 ' + (Number(simulCurrPlusUp) + 1) + '강에 실패했습니다.';
        currPlusUpBefore = 0;
        resultCommentBefore = simulCurrPlusUp === '0' ? txt : txt + ' 강화가 초기화됩니다...';
      }
    }

    // 최고 강화수치 갱신
    if(Number(bestPlusUpBefore) < currPlusUpBefore) {
      bestPlusUpBefore = currPlusUpBefore;
    }
    
    PlusupActions.setPlusUpResult({upTryCntBefore, currPlusUpBefore, resultCommentBefore, usePlusUpKitBefore, usePlusUpKitFBefore, bestPlusUpBefore});
  }

  plusUpGoF = () => {
    const {PlusupActions} = this.props;
    const {simulCurrPlusUp, upTryCnt, usePlusUpKit, usePlusUpKitF, bestPlusUp, resultComment} = this.props.plusUpSimul;
    const plusUpKitFNeed = Math.pow(2,Number(simulCurrPlusUp));
    let upTryCntBefore = upTryCnt;
    let currPlusUpBefore = Number(simulCurrPlusUp);
    let resultCommentBefore = resultComment;
    let usePlusUpKitBefore = usePlusUpKit;
    let usePlusUpKitFBefore = usePlusUpKitF;
    let bestPlusUpBefore = bestPlusUp;

    if(plusUpKitFNeed > Number(usePlusUpKitF)) {
      resultCommentBefore = '+' + (Number(simulCurrPlusUp) + 1) + '은(는) 완벽한 플러스업 ' + String(plusUpKitFNeed) + '개가 필요합니다.';
    }else{
      usePlusUpKitFBefore = Number(usePlusUpKitF) - plusUpKitFNeed; // 완플 소모
      resultCommentBefore = '완벽한 플러스업을 사용하여 ' + (Number(simulCurrPlusUp) + 1) + '강에 성공했습니다.';
      currPlusUpBefore += 1;
    }
    
    PlusupActions.setPlusUpResult({upTryCntBefore, currPlusUpBefore, resultCommentBefore, usePlusUpKitBefore, usePlusUpKitFBefore, bestPlusUpBefore});
  }

  setPlusUpKit = (cnt) => {
    const {PlusupActions} = this.props;
    PlusupActions.setPlusUpKit(cnt);
  }

  componentDidMount() {
    const {PlusupActions} = this.props;
    PlusupActions.initialSimul();
  }

  render() {
    const {setPlusUpKit, plusUpGo, plusUpGoF, plusUpGoKey, plusUpGoKeyF} = this;
    const {plusUpSimul, plusUpGrid, currPlusUp, loading} = this.props;
    const {gradeDv, tierDv} = currPlusUp;
    const {simulCurrPlusUp} = plusUpSimul;
    let currPlusDmg = '0';
    
    if(simulCurrPlusUp !== '0' && loading !== undefined && !loading) {
      currPlusDmg = plusUpGrid[2][Number(gradeDv)][Number(tierDv)][Number(simulCurrPlusUp) - 1];
    }
    
    return (
      <PlusUpSimul
        setPlusUpKit={setPlusUpKit}
        plusUpSimul={plusUpSimul}
        plusUpGo={plusUpGo}
        plusUpGoF={plusUpGoF}
        plusUpGoKey={plusUpGoKey}
        plusUpGoKeyF={plusUpGoKeyF}
        currPlusDmg={currPlusDmg}
      />
    );
  }
}

export default connect(
  (state) => ({
    loading: state.pender.pending['plusup/GET_PLUSUP_GRID'],
    plusUpGrid: state.plusup.toJS().plusUpGrid,
    currPlusUp: state.plusup.toJS().currPlusUp,
    plusUpSimul: state.plusup.toJS().plusUpSimul
  }),
  (dispatch) => ({
    PlusupActions: bindActionCreators(plusupActions, dispatch)
  })
)(PlusUpSimulContainer);