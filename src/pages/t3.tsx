import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class t3 extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      arr: []
    };
  }

  UNSAFE_componentWillMount = () => {
    let arr = [];
    for (let i = 0; i < 5; i++) {
      arr.push(i);
    }
    this.setState({ arr });
  };

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
    console.log(this.state.arr);
    return (
      <View>
        <View style={styles.vb}>
          {this.state.arr.map((item, idx) => {
            return (
              <Text style={styles.tb} key={idx}>
                {item}
              </Text>
            );
          })}
        </View>

        <View style={[styles.vb, { alignItems: "center" }]}>
          <Text style={styles.clrcle}></Text>
          <Text>asdfghjkl</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  vb: {
    flexWrap: "wrap",
    flexDirection: "row"
  },

  tb: {
    flex: 0,
    width: "25%",
    height: 100,
    backgroundColor: "pink",
    margin: 10
  },
  clrcle: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "#cdcdcd",
    marginLeft: 20,
    marginRight: 20
  }
});
