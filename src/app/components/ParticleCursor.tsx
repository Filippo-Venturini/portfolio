"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim"; // ✅ Import corretto

export default function ParticleCursor() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine); // ✅ Usa loadSlim per una versione più leggera
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: false },
                particles: {
                    number: { value: 10 },
                    move: { enable: true, speed: 3 },
                    shape: { type: "circle" },
                    opacity: { value: 0.7 },
                    size: { value: 4 },
                    color: { value: "#4A66A1" },
                    links: { enable: false },
                },
                detectRetina: true,
            }}
            className="fixed top-0 left-0 w-full h-full pointer-events-none"
        />
    );
}
