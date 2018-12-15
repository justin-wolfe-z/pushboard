import React from "react";
import { connect } from "react-redux";
import { pushThunk, toEditor, toDynamic } from "../actions/index";
import emoji from "node-emoji";

const PushButton = props => {
  return (
    <div
      className={[
        "PushButton",
        props.isSelecting ? "boardSelecting" : "boardNotSelecting"
      ].join(" ")}
      onClick={() => props.click(props, props.isSelecting, props.type)}
    >
      {emoji.get(props.icon)}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isSelecting: state.isSelecting
  };
};

const mapDispatchToProps = dispatch => {
  return {
    click: (button, selecting, type) => {
      if (selecting) {
        dispatch(toEditor(button));
      } else {
        type !== "static"
          ? dispatch(toDynamic(button))
          : dispatch(pushThunk(button));
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PushButton);
