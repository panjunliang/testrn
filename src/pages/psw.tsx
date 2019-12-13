import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView
} from "react-native";

export default class tsx extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      inp: "",
      arr: [],
      flag: true
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

  UNSAFE_componentWillMount = () => {
    if (this.state.inp == "") {
      let arr = [];
      arr = ["", "", "", ""];
      this.setState({ arr });
    }
  };

  _changeVal(text) {
    console.log(text);
    this.setState({ inp: text });
  }

  render() {
    const { navigate } = this.props.navigation;
    const { goBack } = this.props.navigation;

    return (
      <ScrollView>
        <View>
          <View style={styles.pt}>
            <Text style={{ flex: 1, fontSize: 16 }}>密码</Text>

            <TextInput
              style={{ flex: 2, borderWidth: 1, borderColor: "gray" }}
              value={this.state.inp}
              secureTextEntry={this.state.flag}
              onChangeText={newText => this._changeVal(newText)}
            ></TextInput>
          </View>

          <View style={styles.btnbox}>
            <View style={styles.btnWid}>
              <Button
                title="返回"
                onPress={() => {
                  goBack();
                }}
              />
            </View>

            <View style={styles.btnWid}>
              <Button
                title="下一步"
                onPress={() => {
                  this.setState({ inp: "" });
                  navigate("T3");
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
  }
});
