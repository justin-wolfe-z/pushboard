import React from "react";
import { connect } from "react-redux";
import Login from "../screens/Login";
import Editor from "../screens/Editor";
import Pushboard from "../screens/Pushboard";
import Splash from "../screens/Splash";
import Settings from "../screens/Settings";
import Dynamic from "../screens/Dynamic";

const screens = {
  Login: Login,
  Pushboard: Pushboard,
  Editor: Editor,
  Splash: Splash,
  Settings: Settings,
  Dynamic: Dynamic
};

const App = ({ screen }) => {
  const CurrentScreen = screens[screen];
  return (
    <div className="AppContainer">
      <CurrentScreen />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    screen: state.screen
  };
};

export default connect(mapStateToProps)(App);
