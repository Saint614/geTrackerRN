import React, { useState, useEffect } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { Card } from "@rneui/themed";

export default function App() {
  const url = "prices.runescape.wiki/api/v1/osrs/latest";

  const Fetch = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setItems(data);
        });
    }, []);
    return (
      <ScrollView>
        {items.map((item) => (
          <Text>{item}</Text>
        ))}
      </ScrollView>
    );
  };
}
