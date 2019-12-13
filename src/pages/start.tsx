import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { AndroidBackHandler } from "react-navigation-backhandler";

export default class st extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text style={styles.sb}>CoinLoan</Text>

        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 20 }}>通信权限</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod bibendum laoreet. Proin gravida dolor sit amet lacus
            accumsan et viverra justo commodo. Proin sodales pulvinar sic
            tempor. Sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra
            vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc
            accuan eget.
          </Text>
        </View>

        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 20 }}>通信权限</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod bibendum laoreet. Proin gravida dolor sit amet lacus
            accumsan et viverra justo commodo. Proin sodales pulvinar sic
            tempor. Sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra
            vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc
            accuan eget.
          </Text>
        </View>

        <View style={{ padding: 20 }}>
          {/* <AndroidBackHandler
            onBackPress={() => {
              return true;
            }}
          >
            <Text>关闭</Text>
          </AndroidBackHandler> */}

          <Button
            title="同意"
            onPress={() => {
              navigate("T1");
            }}
          ></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sb: {
    fontSize: 30,
    textAlign: "center"
  }
});
