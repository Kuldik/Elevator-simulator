import { useSelector } from "react-redux";
import { RootState } from "../store";

const HistoryDisplay = () => {
  const history = useSelector((state: RootState) => state.elevator.history);

  return (
    <div style={{
      background: "#1a1a1a",
      color: "#0f0",
      fontFamily: "monospace",
      padding: "8px 12px",
      borderRadius: "6px",
    }}>
      Лифт был здесь: {history.join(" → ") || "—"}
    </div>
  );
};

export default HistoryDisplay;
