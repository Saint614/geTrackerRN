import { useState, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Card, ListItem } from "@rneui/base";
import { fetchItems } from "../items/itemsSlice";

import Loading from "../components/LoadingComponent";
import * as Animatable from "react-native-animatable";

const HomeScreen = () => {
  const items = useSelector((state) => state.items);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  if (items.isLoading) {
    return (
      <ScrollView>
        <Card>
          <Card.Title>Items</Card.Title>
          <Card.Divider />
          <Loading />
        </Card>
      </ScrollView>
    );
  }
  if (items.errMess) {
    return (
      <ScrollView>
        <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
          <Card>
            <Card.Title>Items</Card.Title>
            <Card.Divider />
            <Text>{items.errMess}</Text>
          </Card>
        </Animatable.View>
      </ScrollView>
    );
  }

  return (
    <ScrollView>
      <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
        <Card>
          <Card.Title>Items</Card.Title>
          <Card.Divider />
          {items.itemsArray.map((item) => {
            return (
              <ListItem key={item.id}>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                  <ListItem.Subtitle>{item.examine}</ListItem.Subtitle>
                  <ListItem.Subtitle>{item.value}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            );
          })}
        </Card>
      </Animatable.View>
    </ScrollView>
  );
};

export default HomeScreen;
