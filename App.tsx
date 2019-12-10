import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Navi from "./src/Navigation";
import store from "./src/pages/store";
import { Provider } from "react-redux";

export default class App extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      m: null
    };
  }

  render() {
    return (
      <Provider store={store}>
        <Navi />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
