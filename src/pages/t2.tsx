import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  Keyboard
} from "react-native";

export default class t2 extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      inp: "",
      arr: ["", "", ""]
    };
  }

  static navigationOptions = {
    headerTitle: (
      <Text style={{ flex: 1, textAlign: "center", fontSize: 20 }}>
        CoinLoan
      </Text>
    ),
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff"
  };

  _changeVal(text) {
    this.setState({ inp: text });
  }

  _modifyArray(text) {
    let brr = [];
    if (text[0]) {
      brr[0] = text[0];
    } else {
      brr[0] = "";
    }
    if (text[1]) {
      brr[1] = text[1];
    } else {
      brr[1] = "";
    }
    if (text[2]) {
      brr[2] = text[2];
    } else {
      brr[2] = "";
    }

    this.setState({ inp: text, arr: brr });
  }

  render() {
    const { navigate } = this.props.navigation;
    const { goBack } = this.props.navigation;

    return (
      <ScrollView>
        <View>
          <View style={styles.pt}>
            <Text style={{ flex: 1, fontSize: 16 }}>验证码</Text>

            {/* <TextInput
              style={{ flex: 2, borderWidth: 1, borderColor: "gray" }}
              value={this.state.inp}
              onChangeText={newText => this._changeVal(newText)}
              maxLength={1}
            ></TextInput> */}
            <View style={{ flexDirection: "row", flex: 2 }}>
              {this.state.arr.map((item, i) => {
                return (
                  <Text key={i} style={styles.tb}>
                    {item}
                  </Text>
                );
              })}
              <TextInput
                style={{
                  height: 40,
                  backgroundColor: "transparent",
                  color: "transparent",
                  position: "absolute",
                  width: 120
                }}
                value={this.state.inp}
                maxLength={3}
                onChangeText={text => {
                  this._modifyArray(text);
                }}
                caretHidden={true}
              ></TextInput>
            </View>
          </View>

          <View style={styles.btnbox}>
            <View style={styles.btnWid}>
              <Button
                title="返回"
                // onPress={() => this.props.navigation.toggleDrawer()}
                onPress={() => goBack()}
              />
            </View>

            <View style={styles.btnWid}>
              <Button
                title="下一步"
                onPress={() => {
                  let brr = ["", "", ""];
                  this.setState({ arr: brr, inp: "" });
                  navigate("psw");
                }}
              ></Button>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  pt: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 60,
    marginBottom: 60
  },

  btnbox: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20
  },
  btnWid: {
    width: 100,
    height: 40
  },
  tb: {
    width: 30,
    height: 40,
    borderWidth: 1,
    marginRight: 10,
    textAlign: "center",
    lineHeight: 40,
    fontSize: 20
  }
});
