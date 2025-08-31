import { useEffect, useRef } from "react";

const useRunOnce = (callback: () => void | Promise<void>) => {
  const calledRef = useRef(false);

  useEffect(() => {
    if (calledRef.current) return;
    calledRef.current = true;

    void callback();
  }, [callback]);
};

export default useRunOnce;
