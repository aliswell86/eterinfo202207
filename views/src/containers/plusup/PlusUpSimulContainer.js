import React, { Component } from 'react';
import PlusUpSimul from 'components/plusup/PlusUpSimul';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as plusupActions from 'store/modules/plusup';

class PlusUpSimulContainer extends Component {

  plusUpGo = () => {
    const {PlusupActions} = this.props;
    const {plusUpLuck, currPlusUp, upTryCnt, usePlusUpKit, usePlusUpKitF} = this.props.plusUpSimul;
    const {luck} = plusUpLuck[Number(currPlusUp)];
    const random = Math.floor(Math.random() * 1000) + 1;
    const {success, fail} = luck;
    let upTryCntBefore = upTryCnt;
    let currPlusUpBefore = Number(currPlusUp);
    let resultComment = '';
    let usePlusUpKitBefore = usePlusUpKit;
    let usePlusUpKitFBefore = usePlusUpKitF;

    if(Number(usePlusUpKit) <= 0) {
      resultComment = '남아있는 플러스업 아이템이 없습니다.';
    }else{
      usePlusUpKitBefore = Number(usePlusUpKit) - 1; // 플업 1개소모
      upTryCntBefore = String(Number(upTryCnt) + 1); // 시도 횟수증가

      if(random <= Number(success)) {
        currPlusUpBefore += 1;
        resultComment = '플러스업 ' + (Number(currPlusUp) + 1) + '강에 성공했습니다 !!';
      }else if(random <= Number(fail)) {
        const txt = '플러스업 ' + (Number(currPlusUp) + 1) + '강에 실패했습니다.';      
        resultComment = currPlusUp === '0' ? txt : txt + ' 강화상태는 유지됩니다.';
      }else{
        const txt = '플러스업 ' + (Number(currPlusUp) + 1) + '강에 실패했습니다.';
        currPlusUpBefore = 0;
        resultComment = currPlusUp === '0' ? txt : txt + ' 강화상태가 초기화됩니다...';
      }
    }

    PlusupActions.setPlusUpResult({upTryCntBefore, currPlusUpBefore, resultComment, usePlusUpKitBefore, usePlusUpKitFBefore});
  }

  plusUpGoF = () => {
    const {PlusupActions} = this.props;
    const {currPlusUp, upTryCnt, usePlusUpKit, usePlusUpKitF} = this.props.plusUpSimul;
    const plusUpKitFNeed = Math.pow(2,Number(currPlusUp));
    let upTryCntBefore = upTryCnt;
    let currPlusUpBefore = Number(currPlusUp);
    let resultComment = '';
    let usePlusUpKitBefore = usePlusUpKit;
    let usePlusUpKitFBefore = usePlusUpKitF;

    if(plusUpKitFNeed > Number(usePlusUpKitF)) {
      resultComment = '+' + (Number(currPlusUp) + 1) + '은 완벽한 플러스업 ' + String(plusUpKitFNeed) + '개가 필요합니다.';
    }else{
      usePlusUpKitFBefore = Number(usePlusUpKitF) - plusUpKitFNeed; // 완플 소모
      resultComment = '완벽한 플러스업을 사용하여 ' + (Number(currPlusUp) + 1) + '강에 성공했습니다.';
      currPlusUpBefore += 1;
    }
    
    PlusupActions.setPlusUpResult({upTryCntBefore, currPlusUpBefore, resultComment, usePlusUpKitBefore, usePlusUpKitFBefore});
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
    const {setPlusUpKit, plusUpGo, plusUpGoF} = this;
    const {plusUpSimul} = this.props;

    return (
      <PlusUpSimul
      setPlusUpKit={setPlusUpKit}
      plusUpSimul={plusUpSimul}
      plusUpGo={plusUpGo}
      plusUpGoF={plusUpGoF}/>
    );
  }
}

export default connect(
  (state) => ({
    plusUpSimul: state.plusup.toJS().plusUpSimul
  }),
  (dispatch) => ({
    PlusupActions: bindActionCreators(plusupActions, dispatch)
  })
)(PlusUpSimulContainer);