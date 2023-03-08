import { useEffect, useState } from 'react';
// import { isBrowser } from '@/utils';
function on(obj: Window, ...args: [string, () => void]) {
  if (obj && obj.addEventListener) {
    obj.addEventListener(...args);
  }
}
function off(obj: Window, ...args: [string, () => void]) {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(...args);
  }
}
export const isBrowser = typeof window !== 'undefined';
const useWindowSize = (
  initialWidth = Infinity,
  initialHeight = Infinity,
): { width: number; height: number } => {
  const [state, setState] = useState({
    width: isBrowser ? window.innerWidth : initialWidth,
    height: isBrowser ? window.innerWidth : initialHeight,
  });
  useEffect(() => {
    if (isBrowser) {
      const handler = () => {
        setState({
          width: window.innerWidth,
          height: window.innerWidth,
        });
      };
      on(window, 'resize', handler);
      return () => {
        off(window, 'resize', handler);
      };
    }
  }, []);
  return state;
};
export default useWindowSize;
