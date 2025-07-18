import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles-light"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#6b7280" },
          shape: { type: "circle" },
          opacity: { value: 0.6, random: true },
          size: { value: 3, random: true },
          move: { 
            enable: true, 
            speed: 1, 
            direction: "none", 
            outModes: { default: "bounce" } 
          },
          links: { 
            enable: true, 
            color: "#9ca3af", 
            opacity: 0.4, 
            width: 1,
            distance: 150
          },
        },
        detectRetina: true,
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default ParticlesBackground; 