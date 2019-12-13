import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  CheckBox,
  Keyboard,
  ScrollView
} from "react-native";

export default class tm extends Component<any, any> {
  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState(previousState => {
        return { isShowingLine: !previousState.isShowingLine };
      });
    }, 600);
  }

  state = {
    data: ["", "", "", "", "", ""],
    value: "",
    status: [true, false, false, false, false, false],
    isShowingLine: true
  };

  componentWillUnmount() {}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textInputContainer}>
          {this.state.data.map((item, index) => {
            return (
              <View key={index} style={styles.item}>
                {!this.state.status[index] ? (
                  <Text key={index + 1000} style={styles.txt}>
                    {item}
                  </Text>
                ) : this.state.isShowingLine ? (
                  <View style={styles.line}></View>
                ) : (
                  <View></View>
                )}
              </View>
            );
          })}
        </View>
        <TextInput
          underlineColorAndroid="transparent"
          style={[styles.textInput, { marginTop: -45 }]}
          autoFocus={true}
          keyboardType={"number-pad"}
          maxLength={6}
          selectionColor={"transparent"}
          value={this.state.value}
          onChangeText={text => {
            this.onChangeText(text);
          }}
        />
      </View>
    );
  }

  onChangeText = text => {
    var s = [];
    for (let index = 0; index < 6; index++) {
      if (index == text.length) {
        s.push(true);
      } else {
        s.push(false);
      }
    }

    var str = text + "      ";
    this.setState({
      data: str.split("", 6),
      value: text,
      status: s
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  textInputContainer: {
    flexDirection: "row",
    paddingHorizontal: 30,
    justifyContent: "space-around"
  },
  textInput: {
    color: "transparent",
    backgroundColor: "transparent"
  },
  item: {
    width: 45,
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: "red",
    justifyContent: "center",
    alignItems: "center"
  },
  txt: {
    flex: 1,
    fontSize: 36,
    fontWeight: "700",
    textAlign: "center"
  },
  line: {
    backgroundColor: "red",
    width: 1.5,
    height: 30
  }
});
