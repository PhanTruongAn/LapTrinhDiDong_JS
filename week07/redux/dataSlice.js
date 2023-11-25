import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getData = createAsyncThunk("data/getData", async () => {
  const response = await fetch(
    `https://65420869f0b8287df1ff5d0a.mockapi.io/Users`
  );
  const data = await response.json();
  return data;
});
export const createData = createAsyncThunk(
  "data/createData",
  async (newData) => {
    const response = await fetch(
      `https://65420869f0b8287df1ff5d0a.mockapi.io/Users`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      }
    );
    return response.json();
  }
);
export const updateData = createAsyncThunk(
  "data/updateData",
  async (updatedData) => {
    const response = await fetch(
      `https://65420869f0b8287df1ff5d0a.mockapi.io/Users/${updatedData.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      }
    );
    // const data = await response.json(); // Lưu ý dòng này
    // return data;
    return await response.json();
  }
);
const userSlide = createSlice({
  name: "data",
  initialState: {
    data: [],
    status: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(createData.fulfilled, (state, action) => {
        state.data.push(action.payload);
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
export default userSlide.reducer;
