/* eslint-disable no-shadow */
import React from "react";

export enum PanningDirectionsEnum {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}

export type PanningDirectionsUnion = "up" | "down" | "left" | "right";

export type PanningDirections = PanningDirectionsEnum | PanningDirectionsUnion;

export interface PanLocationProps {
  left?: number;
  top?: number;
}

export interface PanDirectionsProps {
  x?: PanningDirections;
  y?: PanningDirections;
}

export interface PanAmountsProps {
  x?: number;
  y?: number;
}

export type PanAmountDirections = Pick<
  PanningContextState,
  "dragDirections" | "dragDeltas" | "swipeDirections" | "swipeVelocities"
>;

export type PanSwipe = {
  directions: PanDirectionsProps;
  velocities: PanAmountsProps;
};

export type PanDrag = {
  directions: PanDirectionsProps;
  deltas: PanAmountsProps;
};

export interface PanningContextState {
  dragDirections: PanDirectionsProps;
  dragDeltas: PanAmountsProps;
  swipeDirections: PanDirectionsProps;
  swipeVelocities: PanAmountsProps;
  isPanning: boolean;
  wasTerminated: boolean;
  panLocation: PanLocationProps;
  // 在手势结束后执行，通常是用户释放了所有的手势
  onPanRelease: () => void;
  // 手势开始时触发
  onPanStart: () => void;
  // 在手势结束后执行，通常是另一个组件成为响应，当前的手势应该取消
  onPanTerminated: () => void;
  /**
   * 拖动时触发
   * directions - 方向
   * deltas - 与方向相同的长度和顺序
   */
  onDrag: (params: PanDrag) => void;
  /**
   * 滑动时触发
   * directions - 方向
   * velocities - 速度
   */
  onSwipe: (params: PanSwipe) => void;
  onPanLocationChanged: (location: PanLocationProps) => void;
}

const PanningContext = React.createContext({} as PanningContextState);

export default PanningContext;
