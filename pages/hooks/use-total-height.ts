import { useLayoutEffect, useState } from "react";

export function useTotalHeight() {
  const [height, setHeight] = useState("100.00");
  useLayoutEffect(() => {
    function updateHeight() {
      const vh = (document.body.clientHeight / window.innerHeight) * 100;
      setHeight(vh.toFixed(2));
    }
    window.addEventListener("load", updateHeight);
    return () => window.removeEventListener("load", updateHeight);
  }, []);
  return height;
}
