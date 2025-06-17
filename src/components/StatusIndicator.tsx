import { useSelector } from "react-redux";
import { RootState } from "../store";

const StatusIndicator = () => {
  const { status, direction, currentFloor } = useSelector(
    (state: RootState) => state.elevator
  );

  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        padding: "10px 16px",
        borderRadius: "6px",
        fontFamily: "monospace",
        fontSize: "14px",
        marginTop: "10px",
      }}
    >
      Этаж: {currentFloor} | Статус: {status} | Направление: {direction}
    </div>
  );
};

export default StatusIndicator;
