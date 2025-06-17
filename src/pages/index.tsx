import Image from "next/image";
import Elevator from "../components/Elevator/Elevator";
import ControlPanel from "../components/ControlPanel/ControlPanel";
import QueueDisplay from "@/components/QueueDisplay";
import StatusIndicator from "@/components/StatusIndicator";

export default function Home() {
  return (
    <div
  style={{
    position: "relative",
    width: "100%",
    height: "100vh",
    maxHeight: "1100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden",
  }}
>
  <Image
    src="/building.png"
    alt="Building"
    fill
    style={{ objectFit: "contain", zIndex: 0 }}
    priority
  />

  <div
    style={{
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
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
    }}
  >
    <QueueDisplay />
    <StatusIndicator />
    <ControlPanel />
  </div>
</div>
  );
}
