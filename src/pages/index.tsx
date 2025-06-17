import Image from "next/image";
import Elevator from "../components/Elevator/Elevator";
import ControlPanel from "../components/ControlPanel/ControlPanel";

export default function Home() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "1100px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Фон здания (без лифта) */}
      <Image
        src="/building.png"
        alt="Building"
        fill
        style={{ objectFit: "contain", zIndex: 0 }}
      />

      {/* Шахта + анимированный лифт */}
      <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <Elevator />
      </div>

      {/* Пульт управления */}
      <div style={{ position: "absolute", right: 50, top: 50, zIndex: 20 }}>
        <ControlPanel />
      </div>
</div>
  );
}
