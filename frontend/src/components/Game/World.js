import React from 'react';
import { Chunk } from './Chunk';
 
import create from 'zustand';

const useChunkStore = create((set) => ({
  renderPosition: [0, 0, 0],
  WorldMap: {

    "0,0,0":true,
    "0,0,1":true,
    "0,0,2":true,
    "0,0,3":true,
    "0,0,4":true,
    "0,0,5":true,
    "0,0,6":true,
    "0,0,7":true,
    "0,0,8":true,
    "0,0,9":true,
    "1,0,0":true,
    "1,0,1":true,
    "1,0,2":true,
    "1,0,3":true,
    "1,0,4":true,
    "1,0,5":true,
    "1,0,6":true,
    "1,0,7":true,
    "1,0,8":true,
    "1,0,9":true,
    "2,0,0":true,
    "2,0,1":true,
    "2,0,2":true,
    "2,0,3":true,
    "2,0,4":true,
    "2,0,5":true,
    "2,0,6":true,
    "2,0,7":true,
    "2,0,8":true,
    "2,0,9":true,
    "3,0,0":true,
    "3,0,1":true,
    "3,0,2":true,
    "3,0,3":true,
    "3,0,4":true,
    "3,0,5":true,
    "3,0,6":true,
    "3,0,7":true,
    "3,0,8":true,
    "3,0,9":true,
    "4,0,0":true,
    "4,0,1":true,
    "4,0,2":true,
    "4,0,3":true,
    "4,0,4":true,
    "4,0,5":true,
    "4,0,6":true,
    "4,0,7":true,
    "4,0,8":true,
    "4,0,9":true,
    "5,0,0":true,
    "5,0,1":true,
    "5,0,2":true,
    "5,0,3":true,
    "5,0,4":true,
    "5,0,5":true,
    "5,0,6":true,
    "5,0,7":true,
    "5,0,8":true,
    "5,0,9":true,
    "6,0,0":true,
    "6,0,1":true,
    "6,0,2":true,
    "6,0,3":true,
    "6,0,4":true,
    "6,0,5":true,
    "6,0,6":true,
    "6,0,7":true,
    "6,0,8":true,
    "6,0,9":true,
    "7,0,0":true,
    "7,0,1":true,
    "7,0,2":true,
    "7,0,3":true,
    "7,0,4":true,
    "7,0,5":true,
    "7,0,6":true,
    "7,0,7":true,
    "7,0,8":true,
    "7,0,9":true,
    "8,0,0":true,
    "8,0,1":true,
    "8,0,2":true,
    "8,0,3":true,
    "8,0,4":true,
    "8,0,5":true,
    "8,0,6":true,
    "8,0,7":true,
    "8,0,8":true,
    "8,0,9":true,
    "9,0,0":true,
    "9,0,1":true,
    "9,0,2":true,
    "9,0,3":true,
    "9,0,4":true,
    "9,0,5":true,
    "9,0,6":true,
    "9,0,7":true,
    "9,0,8":true,
    "9,0,9":true    },
  setRenderPosition: (renderPosition) => set({ renderPosition }),
}));

export function World({ cubesArray, clusterWidth, renderDistance, playerPosition }) {
  const renderPosition = useChunkStore(state => state.renderPosition);
  const setRenderPosition = useChunkStore(state => state.setRenderPosition);
  const WorldMap = useChunkStore(state => state.WorldMap);

  React.useEffect(() => {
    // Atualizar a posição apenas se o jogador tiver se movido significativamente
    const chunkPosition = renderPosition.map(coord => Math.floor(coord / 10));
    const playerChunkDistance = Math.max(
      Math.abs(playerPosition[0] - chunkPosition[0]),
      Math.abs(playerPosition[1] - chunkPosition[1]),
      Math.abs(playerPosition[2] - chunkPosition[2])
    );
    if (playerChunkDistance >= renderDistance - 1 && playerChunkDistance <= renderDistance + 10) {
      setRenderPosition(playerPosition);
    }
  }, [playerPosition, renderDistance, renderPosition, setRenderPosition]);

  const renderChunks = React.useMemo(() => {
    const newRenderChunks = [];
    const startX = Math.max(renderPosition[0] - renderDistance, 0);
    const endX = Math.min(renderPosition[0] + renderDistance, 9);
    const startY = Math.max(renderPosition[1] - renderDistance, 0);
    const endY = Math.min(renderPosition[1] + renderDistance, 9);
    const startZ = Math.max(renderPosition[2] - renderDistance, 0);
    const endZ = Math.min(renderPosition[2] + renderDistance, 9);

    for (let x = startX; x <= endX; x++) {
      for (let y = startY; y <= endY; y++) {
        for (let z = startZ; z <= endZ; z++) {
          const chunkKey = `${x},${y},${z}`;
          if (WorldMap[chunkKey]) {
            const position = [x * 10, y * 10, z * 10];
            newRenderChunks.push({ key: chunkKey, position });
          }
        }
      }
    }

    return newRenderChunks;
  }, [WorldMap, renderPosition, renderDistance]);

  return (
    <group>
      {renderChunks.map(({ key, position }) => (
        <Chunk
          key={key}
          position={position}
          clusterPosition={renderPosition}
          clusterWidth={clusterWidth}
          onClick={(coords, faceIndex, button, globalCoords) => {
            // Lógica de clique
          }}
          cubesArray={cubesArray}
          isHover={false}
        />
      ))}
    </group>
  );
}
