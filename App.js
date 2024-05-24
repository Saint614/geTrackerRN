import React, { useState, useEffect } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

import { baseUrl } from "./shared/baseUrl";

export default function App() {
  async function fetchGE() {
    try {
      const response = await fetch(baseUrl);
      const geInfo = await response.json();
      console.log(geInfo);
      <View>
        <Text>{geInfo}</Text>
      </View>;
    } catch (error) {
      console.error("There was an error!", error);
    }
  }
}
