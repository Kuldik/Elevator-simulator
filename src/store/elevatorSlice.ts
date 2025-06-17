import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ElevatorState {
  currentFloor: number;
  queue: number[];
  direction: "up" | "down" | "idle";
  status: "moving" | "stopped" | "arriving";
}

const initialState: ElevatorState = {
  currentFloor: 0,
  queue: [],
  direction: "idle",
  status: "stopped",
};



const elevatorSlice = createSlice({
  name: "elevator",
  initialState,
  reducers: {
    addToQueue(state, action: PayloadAction<number>) {
      if (!state.queue.includes(action.payload)) {
        state.queue.push(action.payload);
      }
    },
    setCurrentFloor(state, action: PayloadAction<number>) {
      state.currentFloor = action.payload;
    },
    setStatus(state, action: PayloadAction<ElevatorState["status"]>) {
      state.status = action.payload;
    },
    removeFromQueue(state, action: PayloadAction<number>) {
      state.queue = state.queue.filter(floor => floor !== action.payload);
    },
    setDirection(state, action: PayloadAction<"up" | "down" | "idle">) {
      state.direction = action.payload;
    },
    clearQueue(state) {
      state.queue = [];
    },
  },
});

export const {
  addToQueue,
  setCurrentFloor,
  setStatus,
  clearQueue,
  removeFromQueue,
  setDirection,
} = elevatorSlice.actions;

export default elevatorSlice.reducer;
