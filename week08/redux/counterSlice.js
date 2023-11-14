import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    jobs: [
      { id: 1, job: "To check email" },
      { id: 2, job: "UI task web page" },
      { id: 3, job: "Learn javascript basic" },
      { id: 4, job: "Learn HTML Advance" },
      { id: 5, job: "Medical App UI" },
      { id: 6, job: "Learn Java" },
    ],
  },
  reducers: {},
});
export default counterSlice.reducer;
