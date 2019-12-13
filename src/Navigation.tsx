import T1 from "./pages/t1";
import T2 from "./pages/t2";
import T3 from "./pages/t3";
import start from "./pages/start";
import psw from "./pages/psw";
import testmodel from "./pages/testmodel";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const MainNavigator = createStackNavigator({
  Home: { screen: start },
  T1: { screen: T1 },
  T2: { screen: T2 },
  T3: { screen: T3 },
  psw: { screen: psw }
});

const Ca = createAppContainer(MainNavigator);

export default Ca;
