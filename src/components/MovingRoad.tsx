import { useEffect, useState } from "react";

const carImages = [
  { src: "/elevator-simulator/car1left.svg", direction: "left" },
  { src: "/elevator-simulator/car2left.svg", direction: "left" },
  { src: "/elevator-simulator/car1right.svg", direction: "right" },
  { src: "/elevator-simulator/car2right.svg", direction: "right" },
];

const MovingRoad = () => {
  const [cars, setCars] = useState<{ id: number; src: string; direction: string }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const car = carImages[Math.floor(Math.random() * carImages.length)];
      setCars((prev) => [...prev, { id, ...car }]);

      // Remove car after 10s
      setTimeout(() => {
        setCars((prev) => prev.filter((c) => c.id !== id));
      }, 10000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100px",
        position: "relative",
        backgroundImage: `url("/elevator-simulator/road3.svg")`,
        backgroundRepeat: "repeat-x",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      {cars.map((car) => {
        const carStyle = {
          position: "absolute" as const,
          height: "50px",
          bottom: car.direction === "left" ? "-7px" : "20px",
          animation: `${car.direction === "left" ? "moveLeft" : "moveRight"} 10s linear`,
        };

        return <img key={car.id} src={car.src} alt="car" style={carStyle} />;
      })}

      <style jsx>{`
        @keyframes moveLeft {
          0% {
            left: 100%;
          }
          100% {
            left: -100px;
          }
        }

        @keyframes moveRight {
          0% {
            right: 100%;
          }
          100% {
            right: -100px;
          }
        }
      `}</style>
    </div>
  );
};

export default MovingRoad;
