import Elevator from "../components/Elevator/Elevator";
import ControlPanel from "../components/ControlPanel/ControlPanel";
import QueueDisplay from "@/components/QueueDisplay";
import StatusIndicator from "@/components/StatusIndicator";
import HistoryDisplay from './../components/HistoryDisplay';
import MovingRoad from "@/components/MovingRoad";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Здание со всеми блоками */}
      <div
        style={{
          position: "relative",
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/building.png"
          alt="Building"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transformOrigin: "center",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
          }}
        >
          <Elevator />
        </div>

        <div
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            zIndex: 20,
            padding: "20px",
            background: "radial-gradient(black, transparent)",
            borderRadius: "20px",
            width: "430px",
          }}
        >
          <QueueDisplay />
          <StatusIndicator />
          <ControlPanel />
          <HistoryDisplay />
        </div>
      </div>

      {/* Дорога */}
      <MovingRoad />
    </div>
  );
}