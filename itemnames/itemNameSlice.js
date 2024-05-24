import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../shared/baseUrl";

export const fetchItemName = createAsyncThunk(baseUrl, async () => {
  const response = await fetch(baseUrl + "name");
  if (!response.ok) {
    return Promise.reject("unable to fetch, status" + response.status);
  }
  const data = await response.json();
  return data;
});

console.log(data);
