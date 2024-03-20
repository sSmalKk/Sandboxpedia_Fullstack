import { Canvas } from "@react-three/fiber"
import { Sky, PointerLockControls, KeyboardControls } from "@react-three/drei"
import { Physics } from "@react-three/rapier"
import { Player } from "./Player"
import { World } from "./World"
import { useEffect, useState } from "react";
import * as THREE from "three"
import create from "zustand";
import {LeftHand , RightHand } from "./Hands"

const useStore = create((set) => ({
  playerPosition: [0, 10, 0],
  setPlayerPosition: (newPosition) => set({ playerPosition: newPosition }),
  chunkPosition: [0, 0, 0],
  setChunkPosition: (newPosition) => set({ chunkPosition: newPosition }), // Adicionando o setter para chunkPosition
  border: false,
}));
export default function Game() {
  const [chunkPosition, setChunkPosition] = useStore((state) => [state.chunkPosition, state.setChunkPosition]);
  const [speed] = useState(5);
  const [direction] = useState(new THREE.Vector3());
  const [frontVector] = useState(new THREE.Vector3());
  const [sideVector] = useState(new THREE.Vector3());
  const [rotation] = useState(new THREE.Vector3());
  useEffect(() => {
    console.log("chunkPosition:", chunkPosition);
  }, [chunkPosition]);
  
  
 
  const cubesArray = [
      [0, 0, 0], [0, 0, 1], [0, 0, 2], [0, 0, 3], [0, 0, 4], [0, 0, 5], [0, 0, 6], [0, 0, 7], [0, 0, 8], [0, 0, 9],
      [1, 0, 0], [1, 0, 1], [1, 0, 2], [1, 0, 3], [1, 0, 4], [1, 0, 5], [1, 0, 6], [1, 0, 7], [1, 0, 8], [1, 0, 9],
      [2, 0, 0], [2, 0, 1], [2, 0, 2], [2, 0, 3], [2, 0, 4], [2, 0, 5], [2, 0, 6], [2, 0, 7], [2, 0, 8], [2, 0, 9],
      [3, 0, 0], [3, 0, 1], [3, 0, 2], [3, 0, 3], [3, 0, 4], [3, 0, 5], [3, 0, 6], [3, 0, 7], [3, 0, 8], [3, 0, 9],
      [4, 0, 0], [4, 0, 1], [4, 0, 2], [4, 0, 3], [4, 0, 4], [4, 0, 5], [4, 0, 6], [4, 0, 7], [4, 0, 8], [4, 0, 9],
      [5, 0, 0], [5, 0, 1], [5, 0, 2], [5, 0, 3], [5, 0, 4], [5, 0, 5], [5, 0, 6], [5, 0, 7], [5, 0, 8], [5, 0, 9],
      [6, 0, 0], [6, 0, 1], [6, 0, 2], [6, 0, 3], [6, 0, 4], [6, 0, 5], [6, 0, 6], [6, 0, 7], [6, 0, 8], [6, 0, 9],
      [7, 0, 0], [7, 0, 1], [7, 0, 2], [7, 0, 3], [7, 0, 4], [7, 0, 5], [7, 0, 6], [7, 0, 7], [7, 0, 8], [7, 0, 9],
      [8, 0, 0], [8, 0, 1], [8, 0, 2], [8, 0, 3], [8, 0, 4], [8, 0, 5], [8, 0, 6], [8, 0, 7], [8, 0, 8], [8, 0, 9],
      [9, 0, 0], [9, 0, 1], [9, 0, 2], [9, 0, 3], [9, 0, 4], [9, 0, 5], [9, 0, 6], [9, 0, 7], [9, 0, 8], [9, 0, 9],
    ];

    return (
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "w", "W"] },
          { name: "backward", keys: ["ArrowDown", "s", "S"] },
          { name: "left", keys: ["ArrowLeft", "a", "A"] },
          { name: "right", keys: ["ArrowRight", "d", "D"] },
          { name: "jump", keys: ["Space"] },
        ]}
      >
        <Canvas shadows camera={{ fov: 45 }} style={{ position: 'fixed', zIndex: 0 }} className="top-0 bottom-0 w-full h-full">
          <Sky sunPosition={[100, 20, 100]} />
          <ambientLight intensity={10} />
          <pointLight castShadow intensity={10} position={[100, 100, 100]} />
          <Physics gravity={[0, -9, 0]}>
          <RightHand position={[0, 2, 0]} /> {/* Mão direita */}
          <LeftHand position={[0, 2, 0]} /> {/* Mão direita */}

          <Player setChunkPosition={setChunkPosition}initialPosition={[0, 100, 0]} speed={speed} direction={direction} frontVector={frontVector} sideVector={sideVector} rotation={rotation} />
        <World playerPosition={chunkPosition} cubesArray={cubesArray} clusterWidth={10} renderDistance={1} worldWidth={10} worldHeight={3} />
          </Physics>
          <PointerLockControls />
        </Canvas>
      </KeyboardControls>
    );
  }