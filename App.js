import { ScrollView, Text, View, StyleSheet } from "react-native";

import Main from "./screens/MainComponent";

import { baseUrl } from "./shared/baseUrl";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <Main />
      </View>
    </Provider>
  );
}
