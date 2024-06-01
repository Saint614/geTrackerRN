import { useState, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { baseUrl } from "../shared/baseUrl";
import { fetchItems } from "../items/itemsSlice";

const HomeScreen = () => {
  return (
    <View>
      <Text
        style={{
          alignText: "center",
          margin: 100,
        }}
      >
        <fetchItems />
      </Text>
    </View>
  );
};

export default HomeScreen;
