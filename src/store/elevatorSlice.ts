import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ElevatorState {
  currentFloor: number;
  queue: number[];
  direction: "up" | "down" | "idle";
  status: "moving" | "stopped" | "arriving";
  history: number[];
}

const initialState: ElevatorState = {
  currentFloor: 0,
  queue: [],
  direction: "idle",
  status: "stopped",
  history: [],
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
      state.history.unshift(action.payload);
      if (state.history.length > 5) {
        state.history.pop();
      }
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
