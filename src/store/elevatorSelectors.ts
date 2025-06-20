// store/elevatorSelectors.ts

import { useSelector } from "react-redux";
import { RootState } from "./index";

export const useCurrentFloor = () =>
  useSelector((state: RootState) => state.elevator.currentFloor);

export const useQueue = () =>
  useSelector((state: RootState) => state.elevator.queue);

export const useStatus = () =>
  useSelector((state: RootState) => state.elevator.status);

export const useDirection = () =>
  useSelector((state: RootState) => state.elevator.direction);
