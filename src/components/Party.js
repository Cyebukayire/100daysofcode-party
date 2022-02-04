import React, { useRef } from "react";
import party from "party-js";
import useSound from "use-sound";
import boom from "../media/boom.mp3";

export default function App() {
  const [play] = useSound(boom);
  const ref = useRef([]);

  const balloons = [
    { id: "Vuejs", color: "purple" },
    { id: "React", color: "pink" },
    { id: "AI", color: "yellow" },
    { id: "ML", color: "blue" },
    { id: "JS", color: "Green" },
    { id: "Nodejs", color: "blue" },
    { id: "MongoDB", color: "blue" },
    { id: "Python", color: "blue" },
    { id: "Django", color: "blue" },
  ];

  function confetti(id, color) {
    play();

    party.confetti(ref.current[id], {
      count: party.variation.range(90, 100),
      size: party.variation.range(1.0, 1.4),
      color: party.Color.fromHex(color)
    });

    ref.current[id].style.animation = "explode 100ms forwards";
  }

  return (
    <div className="App" style={{ background: "#f1f1f1" }}>
      <div className="container">
        <div className="balloon">
          {balloons.map((balloon) => (
            <div
              onClick={() => confetti(balloon.id, balloon.color)}
              ref={(el) => (ref.current[balloon.id] = el)}
              key={balloon.id}
            >
              <span>{balloon.id}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
