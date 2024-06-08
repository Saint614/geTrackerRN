import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchItems, selectAllItems } from "./itemsSlice";
import Loading from "../components/LoadingComponent";
import Error from "../components/Error";
import Item from "./Item";
import { Card, ListItem } from "@rneui/base";

const ItemsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const items = useSelector(selectAllItems);
  const isLoading = useSelector((state) => state.items.isLoading);
  const errMsg = useSelector((state) => state.items.errMsg);

  return isLoading ? (
    <Loading />
  ) : errMsg ? (
    <Error errMsg={errMsg} />
  ) : (
    <ScrollView>
      {items.map((item) => {
        return (
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.examine}</ListItem.Subtitle>
            <ListItem.Subtitle>{item.value}</ListItem.Subtitle>
          </ListItem.Content>
        );
      })}
    </ScrollView>
  );
};

export default ItemsList;
