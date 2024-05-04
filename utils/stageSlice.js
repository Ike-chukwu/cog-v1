import { createSlice } from "@reduxjs/toolkit"

export const stageSlice = createSlice({
  name: "stageSlice",
  initialState: {
    stage: "prospect",
  },

  reducers: {
    setStage: (state, action) => {
      state.stage = action.payload
    },
  },
})

export const { setStage } = stageSlice.actions
export default stageSlice.reducer
