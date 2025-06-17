import { useDispatch } from "react-redux";
import { addToQueue } from "../../store/elevatorSlice"
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
    </div>
  );
};

export default ControlPanel;
