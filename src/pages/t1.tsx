import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  CheckBox,
  Keyboard,
  ScrollView,
  BackHandler
} from "react-native";
import Tabs from "./tabs";

export default class t1 extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      inp: "",
      flag: false
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

  render() {
    const { navigate } = this.props.navigation;
    const { goBack } = this.props.navigation;

    return (
      <ScrollView>
        <View>
          <Text style={{ fontSize: 20, textAlign: "center", padding: 12 }}>
            请登录!
          </Text>
          <View style={styles.pt}>
            <Text style={{ flex: 1, fontSize: 16 }}>手机号码</Text>
            <TextInput
              style={{ flex: 2, borderWidth: 1, borderColor: "gray" }}
              value={this.state.inp}
              keyboardType={"numeric"}
              onChangeText={text => {
                this.setState({ inp: text });
              }}
            ></TextInput>
          </View>

          <View style={styles.ck}>
            <CheckBox
              value={this.state.flag}
              onChange={() => this.setState({ flag: !this.state.flag })}
            ></CheckBox>
            <Text>同意用户协议和了解网站隐私说明</Text>
          </View>

          <View style={styles.btnbox}>
            <View style={styles.btnWid}>
              <Button
                title="返回"
                onPress={() => {
                  // goBack();
                  BackHandler.exitApp();
                }}
                //   () => this.props.navigation.toggleDrawer()
              />
            </View>

            <View style={{ marginBottom: 20 }}>
              <View style={styles.btnWid}>
                <Button
                  title="下一步"
                  onPress={() => {
                    navigate("T2");
                  }}
                ></Button>
              </View>

              <View style={[styles.btnWid, { paddingTop: 12 }]}>
                <Button
                  title="老用户跳转"
                  onPress={() => {
                    navigate("psw");
                  }}
                ></Button>
              </View>
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
    paddingRight: 20
  },
  ck: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
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
  lineWid: {
    width: 20,
    borderWidth: 1,
    marginRight: 12,
    borderTopColor: "#fff",
    borderLeftColor: "#fff",
    borderRightColor: "#fff"
  }
});
