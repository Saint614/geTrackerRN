import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../shared/baseUrl";
import { Text, View } from "react-native";

export const fetchItems = createAsyncThunk("items/fetchItem", async () => {
  try {
    const response = await fetch(baseUrl);
    const geInfo = await response.json();
    const itemsArr = geInfo.filter(function (el) {
      return el.value >= 5000000;
    });
  } catch (error) {
    console.error("There was an error!", error);
  }
});

fetchItems();
// const [data, setData] = useState([]);
// useEffect(() => {
//     fetch(baseUrl)
//     .then(response => response.json())
//     .then(json => setData(json))
//     .catch(error => alert(error))
//     .finally(setLoading(false));
// }, []);

// console.log(data);

const itemsSlice = createSlice({
  name: "items",
  initialState: { isLoading: true, errMess: null, itemsArray: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errMess = null;
        state.itemsArray = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.isLoading = false;
        state.errMess = action.error ? action.error.message : "Fetch failed";
      });
  },
});
