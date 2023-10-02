import { useRef } from "react";

export function useMemo(callback, deps) {
  const mPointer = useRef([deps]);
  console.log("mpoinetr----", mPointer); // Memory pointer (Make sure to read useRef docs)
  const isChanged = mPointer.current[0].some(
    // If dependencies changed
    (item, index) => item !== deps[index]
  );

  if (mPointer.current.length === 1 || isChanged) {
    // If first time or changed, compute and store it
    mPointer.current = [deps, callback()];
  }

  return mPointer.current[1];
}

