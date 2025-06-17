import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  setCurrentFloor,
  setStatus,
  clearQueue,
} from "../../store/elevatorSlice";
import Image from "next/image";
import { style } from "framer-motion/client";

const FLOOR_HEIGHT = 150; 
const TOTAL_FLOORS = 7;

const Elevator = () => {
  const { currentFloor, queue, status } = useSelector(
    (state: RootState) => state.elevator
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "moving" || queue.length === 0) return;

    const nextFloor = queue[0];

    if (nextFloor === currentFloor) {
      dispatch(setStatus("doors"));
      setTimeout(() => {
        dispatch(setStatus("stopped"));
        dispatch(clearQueue());
      }, 1000);
      return;
    }

    dispatch(setStatus("moving"));

    setTimeout(() => {
      dispatch(setCurrentFloor(nextFloor));
      dispatch(setStatus("stopped"));
      dispatch(clearQueue());
    }, 1000);
  }, [queue, currentFloor, dispatch, status]);

  return (
    <div
      style={{
        position: "relative",
        width: "100px",
        height: `${FLOOR_HEIGHT * TOTAL_FLOORS - 84}px `,
      }}
    >
      {/* движущаяся кабина */}
      <motion.div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}
        animate={{ y: -currentFloor * FLOOR_HEIGHT }}
        transition={{ duration: 1 }}
      >
        <Image src="/lift.png" alt="Lift cabin" 
        style={{
          position: "relative",
          right: "11px",
          scale: "0.97",
        }} 
      width={100} height={110} />
      </motion.div>
    </div>
  );
};

export default Elevator;
