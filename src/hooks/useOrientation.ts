import { useCallback, useEffect, useState } from "react";
import constants, { orientations } from "../utils/constants";
import useUpdateEffect from "./useUpdateEffect";

interface UseOrientationProps {
  onOrientationChange?: (orientation: orientations) => void;
}

type UseOrientation = ({ onOrientationChange }: UseOrientationProps) => {
  orientation: orientations;
};

/**
 * 监听屏幕方向变动的 hook
 */
const useOrientation: UseOrientation = ({ onOrientationChange }) => {
  const [orientation, setOrientation] = useState(constants.orientation);

  const orientationChangeListener = useCallback(() => {
    setOrientation(constants.orientation);
  }, []);

  useEffect(() => {
    const listener = constants.addDimensionsEventListener(
      orientationChangeListener
    );
    return () => constants.removeDimensionsEventListener(listener);
  }, []);

  useUpdateEffect(() => {
    onOrientationChange?.(orientation);
  }, [orientation]);

  return { orientation };
};

export default useOrientation;
