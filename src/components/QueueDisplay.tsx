import { useSelector } from "react-redux";
import { RootState } from "../store";

const QueueDisplay = () => {
  const queue = useSelector((state: RootState) => state.elevator.queue);

  return (
    <div
      style={{
        background: "#111",
        color: "lime",
        padding: "10px 20px",
        borderRadius: "8px",
        fontFamily: "monospace",
        fontSize: "16px",
      }}
    >
      Вызовы: {queue.join(", ") || "—"}
    </div>
  );
};

export default QueueDisplay;
