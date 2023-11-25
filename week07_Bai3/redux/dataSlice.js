import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getData = createAsyncThunk("data/getData", async () => {
  const response = await fetch(
    `https://65420869f0b8287df1ff5d0a.mockapi.io/Bai3`
  );
  return await response.json();
});
export const updateData = createAsyncThunk("data/updateData", async (data) => {
  const response = await fetch(
    `https://65420869f0b8287df1ff5d0a.mockapi.io/Bai3/${data.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return await response.json();
});
const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(updateData.fulfilled, (state, action) => {
        const index = state.data.findIndex(
          (data) => data.id === action.payload.id
        );
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      });
  },
});
export default dataSlice.reducer;
