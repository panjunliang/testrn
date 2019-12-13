import React, { Component } from "react";
import { StyleSheet, Text, View, Button, CheckBox } from "react-native";
// import { createDrawerNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { TextInput } from "react-native-gesture-handler";

class t1 extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      inp: "",
      flag: false
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props.navigation);

    return (
      <View>
        <Text style={{ fontSize: 20, textAlign: "center", padding: 12 }}>
          请登录!
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            paddingLeft: 20,
            paddingRight: 20
          }}
        >
          <Text style={styles.title}>手机号码</Text>
          <TextInput
            style={{ flex: 2, borderWidth: 1, borderColor: "gray" }}
            value={this.state.inp}
            onChangeText={text => this.setState({ inp: text })}
          ></TextInput>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20
          }}
        >
          <CheckBox
            value={this.state.flag}
            onChange={() => this.setState({ flag: !this.state.flag })}
          ></CheckBox>
          <Text>同意用户协议和了解网站隐私说明</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 20
          }}
        >
          <View style={{ width: 100, height: 40 }}>
            <Button
              title="返回"
              onPress={() => this.props.navigation.toggleDrawer()}
              //   onPress={() => this.props.navigation.goback()}
            />
          </View>

          <View>
            <View style={{ width: 100, height: 40 }}>
              <Button
                title="下一步"
                onPress={() => {
                  this.props.navigation.navigate("T2");
                }}
              ></Button>
            </View>

            <View style={{ width: 100, height: 40, paddingTop: 12 }}>
              <Button title="老用户跳转" onPress={() => {}}></Button>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

class SettingsScreen extends Component<any, any> {
  static navigationOptions = {
    drawerLabel: "SettingsScreen"
  };

  render() {
    return (
      <View>
        <Text>SettingsScreen!</Text>
      </View>
    );
  }
}

const TabNavigator = createDrawerNavigator({
  Home: t1,
  Settings: SettingsScreen
});

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  title: {
    fontSize: 20
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
