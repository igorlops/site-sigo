import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const SnowParticles = () => {
    const particlesInit = useCallback(async (engine: any) => {
        await loadFull(engine); // Carrega todas as funcionalidades do tsparticles
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    color: {
                        value: "#000000", // Cor de fundo
                    },
                },
                particles: {
                    number: {
                        value: 200, // Quantidade de partículas
                        density: {
                            enable: true,
                            area: 800, // Área onde as partículas ficam visíveis
                        },
                    },
                    color: {
                        value: "#ffffff", // Cor da neve (flocos de neve)
                    },
                    shape: {
                        type: "circle", // Formato dos flocos
                    },
                    opacity: {
                        value: 0.8,
                    },
                    size: {
                        value: { min: 1, max: 5 }, // Tamanho dos flocos de neve
                    },
                    move: {
                        enable: true,
                        speed: 0.5, // Velocidade de queda dos flocos de neve
                        direction: "bottom", // Direção do movimento
                        outModes: {
                            default: "out", // Flocos saem pela parte inferior
                        },
                    },
                },
                interactivity: {
                    events: {
                        onHover: {
                            enable: false, // Desativa a interação ao passar o mouse
                        },
                        onClick: {
                            enable: false, // Desativa a interação ao clicar
                        },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default SnowParticles;
