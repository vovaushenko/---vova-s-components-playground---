import { useEffect, useState } from 'react';

interface MouseCoordinates {
  x: number;
  y: number;
}

export const useGetMouseCoordinates = (): MouseCoordinates => {
  const [mouseCoords, setMouseCoords] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      setMouseCoords(() => ({ x: e.clientX, y: e.clientY }));
    });

    return document.removeEventListener('mousemove', (e) => {
      setMouseCoords(() => ({ x: e.clientX, y: e.clientY }));
    });
  }, []);

  return mouseCoords;
};
