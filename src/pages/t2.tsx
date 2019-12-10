import React, { Component } from "react";
// import Drawer from "react-native-drawer";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";
import { addCount, reduceCount } from "./store/actions/countActions";

function mapStateToProps(state) {
  return {
    count: state.count.count
  };
}

function mapActionToProps(dispatch) {
  return {
    addCount: () => dispatch(addCount()),
    reduceCount: num => dispatch(reduceCount(num))
  };
}

class t2 extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      flag: false
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    // console.log(this.props);
    let content = (
      <View style={{ width: 200, height: 400, backgroundColor: "blue" }}>
        <Text style={{ color: "red" }}>我是抽屉功能</Text>
      </View>
    );
    return (
      <View>
        <Text>t2 --{this.props.count}</Text>
        <Button
          title="jump"
          onPress={() => {
            // this.setState({ flag: true });
            this.props.reduceCount(4);
          }}
        ></Button>
        {/* <Drawer
          type="overlay"
          open={true}
          content={content}
          tapToClose={true}
          panOpenMask={0.4}
          openDrawerOffset={0.4} // 20% gap on the right side of drawer
          panCloseMask={0.2}
          closedDrawerOffset={0}
          styles={drawerStyles}
          tweenHandler={ratio => ({ main: { opacity: (2 - ratio) / 2 } })}
        >
          <Text>我是功能</Text>
        </Drawer> */}
      </View>
    );
  }
}

const drawerStyles = {
  drawer: { shadowColor: "#0000ff", shadowOpacity: 0.8, shadowRadius: 3 },
  main: { paddingLeft: 0 }
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(t2);
