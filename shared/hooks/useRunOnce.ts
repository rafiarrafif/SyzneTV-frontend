import { useEffect, useRef } from "react";

/**
 * @module useRunOnce
 * @description A custom React hook that ensures a callback function is executed only once
 * during the component's lifecycle, even in React Strict Mode or development with hot reloading.
 *
 * @param {() => void | Promise<void>} callback - The function to execute once. Can be synchronous or asynchronous.
 * @returns {void}
 *
 * @example
 * // Synchronous usage
 * useRunOnce(() => {
 *   console.log('This runs only once');
 *   initializeSomething();
 * });
 *
 * @example
 * // Asynchronous usage
 * useRunOnce(async () => {
 *   const data = await fetchData();
 *   setInitialData(data);
 * });
 */
const useRunOnce = (callback: () => void | Promise<void>) => {
  const calledRef = useRef(false);

  useEffect(() => {
    if (calledRef.current) return;
    calledRef.current = true;

    void callback();
  }, [callback]);
};

export default useRunOnce;
