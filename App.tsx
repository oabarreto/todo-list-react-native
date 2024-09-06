import "./src/styles/global.css";

import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View
      className={"flex-1 bg-product-purple_dark items-center justify-center"}
    >
      <Text className={"text-base-gray-100 font-bold"}>
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
