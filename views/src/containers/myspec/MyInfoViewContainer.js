import React, { Component } from 'react';
import MyInfoView from 'components/myspec/MyInfoView';
import {connect} from 'react-redux';

class MyInfoViewContainer extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    const nextInvenDmg = nextProps.myStat.invenDmg;
    const nextInvenCri = nextProps.myStat.invenCri;
    const nextHeadShotRt = nextProps.myStat.headShotRt;
    const currInvenDmg = this.props.myStat.invenDmg;
    const currInvenCri = this.props.myStat.invenCri;
    const currHeadShotRt = this.props.myStat.headShotRt;

    const normalDmgMin = nextProps.myStat.totalDmg.normalDmg.min;
    const normalDmgMax = nextProps.myStat.totalDmg.normalDmg.max;
    const normalDmgFireMin = nextProps.myStat.totalDmg.normalDmgFire.min;
    const normalDmgFireMax = nextProps.myStat.totalDmg.normalDmgFire.max;
    const criDmgMin = nextProps.myStat.totalDmg.criDmg.min;
    const criDmgMax = nextProps.myStat.totalDmg.criDmg.max;
    const criDmgFireMin = nextProps.myStat.totalDmg.criDmgFire.min;
    const criDmgFireMax = nextProps.myStat.totalDmg.criDmgFire.max;
    const headDmgMin = nextProps.myStat.totalDmg.headDmg.min;
    const headDmgMax = nextProps.myStat.totalDmg.headDmg.max;
    const headDmgFireMin = nextProps.myStat.totalDmg.headDmgFire.min;
    const headDmgFireMax = nextProps.myStat.totalDmg.headDmgFire.max;
    // console.log("CURR\n" +
    //   normalDmgMin + " ~ " + normalDmgMax + "\n" +
    //   normalDmgFireMin + " ~ " + normalDmgFireMax + "\n" +
    //   criDmgMin + " ~ " + criDmgMax + "\n" +
    //   criDmgFireMin + " ~ " + criDmgFireMax + "\n" +
    //   headDmgMin + " ~ " + headDmgMax + "\n" +
    //   headDmgFireMin + " ~ " + headDmgFireMax + "\n"
    // );
    const normalDmgMinBefore = this.props.myStat.totalDmg.normalDmg.min;
    const normalDmgMaxBefore = this.props.myStat.totalDmg.normalDmg.max;
    const normalDmgFireMinBefore = this.props.myStat.totalDmg.normalDmgFire.min;
    const normalDmgFireMaxBefore = this.props.myStat.totalDmg.normalDmgFire.max;
    const criDmgMinBefore = this.props.myStat.totalDmg.criDmg.min;
    const criDmgMaxBefore = this.props.myStat.totalDmg.criDmg.max;
    const criDmgFireMinBefore = this.props.myStat.totalDmg.criDmgFire.min;
    const criDmgFireMaxBefore = this.props.myStat.totalDmg.criDmgFire.max;
    const headDmgMinBefore = this.props.myStat.totalDmg.headDmg.min;
    const headDmgMaxBefore = this.props.myStat.totalDmg.headDmg.max;
    const headDmgFireMinBefore = this.props.myStat.totalDmg.headDmgFire.min;
    const headDmgFireMaxBefore = this.props.myStat.totalDmg.headDmgFire.max;
    // console.log("BEFORE\n" +
    //   normalDmgMinBefore + " ~ " + normalDmgMaxBefore + "\n" +
    //   normalDmgFireMinBefore + " ~ " + normalDmgFireMaxBefore + "\n" +
    //   criDmgMinBefore + " ~ " + criDmgMaxBefore + "\n" +
    //   criDmgFireMinBefore + " ~ " + criDmgFireMaxBefore + "\n" +
    //   headDmgMinBefore + " ~ " + headDmgMaxBefore + "\n" +
    //   headDmgFireMinBefore + " ~ " + headDmgFireMaxBefore + "\n"
    // );
    const result = 
    nextInvenDmg !== currInvenDmg ||
    nextInvenCri !== currInvenCri ||
    nextHeadShotRt !== currHeadShotRt ||
    normalDmgMin !== normalDmgMinBefore ||
    normalDmgMax !== normalDmgMaxBefore ||
    normalDmgFireMin !== normalDmgFireMinBefore ||
    normalDmgFireMax !== normalDmgFireMaxBefore ||
    criDmgMin !== criDmgMinBefore ||
    criDmgMax !== criDmgMaxBefore ||
    criDmgFireMin !== criDmgFireMinBefore ||
    criDmgFireMax !== criDmgFireMaxBefore ||
    headDmgMin !== headDmgMinBefore ||
    headDmgMax !== headDmgMaxBefore ||
    headDmgFireMin !== headDmgFireMinBefore ||
    headDmgFireMax !== headDmgFireMaxBefore;

    return result;
  }

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