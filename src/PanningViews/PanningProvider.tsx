import React, { useCallback, useMemo, useState } from "react";
import PanningContext, {
  PanAmountDirections,
  PanLocationProps,
  PanningContextState,
  PanningDirectionsEnum,
} from "./PanningContext";

/**
 * 包装 panResponderView 和 panListenerView 共享一个 context
 */
const PanningProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [isPanning, setIspanning] = useState(false);
  const [wasTerminated, setWasTerminated] = useState(false);
  const [panLocation, setPanLocation] = useState<PanLocationProps>({});
  const [amountDirections, setAmountDirections] = useState<PanAmountDirections>(
    {
      dragDirections: {},
      dragDeltas: {},
      swipeDirections: {},
      swipeVelocities: {},
    }
  );

  const onPanStart = useCallback(() => {
    setIspanning(true);
    setWasTerminated(false);
  }, []);

  const onPanRelease = useCallback(() => {
    setIspanning(false);
  }, []);

  const onPanTerminated = useCallback(() => {
    setIspanning(false);
    setWasTerminated(true);
  }, []);

  const onDrag = useCallback<PanningContextState["onDrag"]>(
    ({ directions, deltas }) => {
      setAmountDirections({
        dragDirections: directions,
        dragDeltas: deltas,
        swipeDirections: {},
        swipeVelocities: {},
      });
    },
    []
  );

  const onSwipe = useCallback<PanningContextState["onSwipe"]>(
    ({ directions, velocities }) => {
      setAmountDirections({
        swipeDirections: directions,
        swipeVelocities: velocities,
        dragDirections: {},
        dragDeltas: {},
      });
    },
    []
  );

  const onPanLocationChanged = useCallback<
    PanningContextState["onPanLocationChanged"]
  >((location) => {
    setPanLocation(location);
  }, []);

  const contextValue = useMemo<PanningContextState>(
    () => ({
      ...amountDirections,
      isPanning,
      panLocation,
      wasTerminated,
      onPanRelease,
      onPanStart,
      onPanTerminated,
      onDrag,
      onSwipe,
      onPanLocationChanged,
    }),
    [
      isPanning,
      panLocation,
      onPanRelease,
      wasTerminated,
      onPanStart,
      onPanTerminated,
      amountDirections,
      onDrag,
      onSwipe,
      onPanLocationChanged,
    ]
  );

  return (
    <PanningContext.Provider value={contextValue}>
      {children}
    </PanningContext.Provider>
  );
};

PanningProvider.Directions = PanningDirectionsEnum;

export default PanningProvider;
