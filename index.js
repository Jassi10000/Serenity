/**
 * @format
 */
import "./wdyr"; // <--- first import
import "react-native-gesture-handler";
import "react-native-get-random-values";
import { AppRegistry } from "react-native";
import { enableScreens } from "react-native-screens";
import App from "./src/App";
import { name as appName } from "./app.json";

enableScreens();

AppRegistry.registerComponent(appName, () => App);
