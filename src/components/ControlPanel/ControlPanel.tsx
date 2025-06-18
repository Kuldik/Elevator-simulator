import { useDispatch } from "react-redux";
import { addToQueue, clearQueue } from "../../store/elevatorSlice"
import styles from "./ControlPanel.module.css";

const FLOORS = [6, 5, 4, 3, 2, 1, 0];

const ControlPanel = () => {
  const dispatch = useDispatch();

  const handleClick = (floor: number) => {
    dispatch(addToQueue(floor));
  };

  return (
    <div className={styles.panel}>
      {FLOORS.map((floor) => (
        <button className={styles.button} key={floor} onClick={() => handleClick(floor)}>
          {floor}
        </button>
      ))}
      <button
        onClick={() => dispatch(clearQueue())}
        style={{ 
          marginTop: "10px", 
          background: "darkred", 
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          padding: "10px 20px",
          transition: "background 0.2s ease",
          fontSize: "16px"
          }}
      >
        Аварийная остановка
      </button>
    </div>
  );
};

export default ControlPanel;
