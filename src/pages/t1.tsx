import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class t1 extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      num: 1
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props);
    return (
      <View>
        <Text>dddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
        <Button
          title="jump"
          onPress={() => navigate("T2", { name: "Jane" })}
        ></Button>
      </View>
    );
  }
}
