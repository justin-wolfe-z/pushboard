import React from "react";
import { connect } from "react-redux";

const StatusBar = ({ account, status }) => {
  return <div className="StatusBar" />;
};

const mapStateToProps = state => {
  return {
    account: state.email,
    status: state.connectionStatus
  };
};

export default connect(mapStateToProps)(StatusBar);
