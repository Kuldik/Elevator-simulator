import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  setCurrentFloor,
  setStatus,
  addToQueue,
  removeFromQueue,
  setDirection,
} from "../../store/elevatorSlice";

const FLOOR_HEIGHT = 150;
const TOTAL_FLOORS = 7;

const Elevator = () => {
  const { currentFloor, queue, status, direction } = useSelector(
    (state: RootState) => state.elevator
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (status !== "stopped") return;

    // Автовозврат на 0 этаж через 5 сек
    if (queue.length === 0) {
      const timeout = setTimeout(() => {
        if (currentFloor !== 0) {
          dispatch(addToQueue(0));
          dispatch(setDirection("down"));
        }
      }, 5000);
      return () => clearTimeout(timeout);
    }

    // Определяем направление если idle
    if (direction === "idle") {
      const next = queue.find((f) => f !== currentFloor);
      if (next !== undefined) {
        const newDir = next > currentFloor ? "up" : "down";
        dispatch(setDirection(newDir));
      }
      return;
    }

    // Получаем список этажей в направлении
    const floorsInDirection =
      direction === "up"
        ? queue.filter((f) => f > currentFloor).sort((a, b) => a - b)
        : queue.filter((f) => f < currentFloor).sort((a, b) => b - a);

    // Если в выбранном направлении нет этажей — меняем направление
    if (floorsInDirection.length === 0) {
      const oppositeDir = direction === "up" ? "down" : "up";
      const hasOppositeFloors =
        oppositeDir === "up"
          ? queue.some((f) => f > currentFloor)
          : queue.some((f) => f < currentFloor);

      if (hasOppositeFloors) {
        dispatch(setDirection(oppositeDir));
      } else {
        dispatch(setDirection("idle")); // больше нет куда ехать
      }
      return;
    }

    if (queue.length === 0 && status === "stopped") {
      const timeout = setTimeout(() => {
        if (currentFloor !== 0 && !queue.includes(0)) {
          dispatch(addToQueue(0));
          dispatch(setDirection("down"));
        }
      }, 5000);
      return () => clearTimeout(timeout);
    }

    // Следующий этаж
    const nextFloor = floorsInDirection[0];

    dispatch(setStatus("moving"));

    setTimeout(() => {
      dispatch(setCurrentFloor(nextFloor));
      dispatch(setStatus("arriving"));

      setTimeout(() => {
        dispatch(removeFromQueue(nextFloor));
        dispatch(setStatus("stopped"));
      }, 1000); // Пауза на этаже
    }, 2000); // Время на переезд
  }, [queue, currentFloor, status, direction, dispatch]);

  const floorHeights = [40, 130, 130, 140, 135, 130, 130];

  const getOffsetY = (floor: number) => {
  return -floorHeights.slice(0, floor).reduce((acc, h) => acc + h, 0);
};
  return (
    <div
      style={{
        position: "relative",
        width: "100px",
        height: `${FLOOR_HEIGHT * TOTAL_FLOORS - 237 }px`,
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}
        animate={{
          y: getOffsetY(currentFloor),
          x: status === "moving" ? [0, -2, 2, -1, 1, 0] : 0,
        }}
        transition={{
          y: { duration: 2 },
          x: { duration: 0.4, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/lift.png`}
          alt="Lift cabin"
          width={100}
          height={110}
          style={{
            position: "relative",
            right: "18px",
            scale: "0.75",
            boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
            borderRadius: "8px",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        />

      </motion.div>
    </div>
  );
};

export default Elevator;
