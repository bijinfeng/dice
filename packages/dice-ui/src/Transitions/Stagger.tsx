import cloneDeep from 'lodash.clonedeep';
import React from 'react';

import Transition from './Transition';
import type { StaggerProps, StaggerConfig } from './types';

const defaultStaggerConfig: StaggerConfig = { offset: 0, reverse: false };

const Stagger = ({ children, ...restProps }: StaggerProps) => {
  return React.Children.map(children, (child, index) => {
    const clonedAnimationConfig = cloneDeep(restProps);
    const { animate, exit } = clonedAnimationConfig;

    if (animate) {
      if (!animate.transition) {
        animate.transition = {};
      }
      animate.transition.delay = animate.transition.delay ?? 0;
      const stagger = animate.transition.stagger ?? defaultStaggerConfig;
      const offset = stagger.reverse
        ? (React.Children.count(children) - 1 - index) * stagger.offset
        : index * stagger.offset;
      animate.transition.delay += offset;
    }

    if (exit) {
      if (!exit.transition) {
        exit.transition = {};
      }
      exit.transition.delay = exit.transition.delay ?? 0;
      const stagger = exit.transition.stagger ?? defaultStaggerConfig;
      const offset = stagger.reverse
        ? (React.Children.count(children) - 1 - index) * stagger.offset
        : index * stagger.offset;
      exit.transition.delay += offset;
    }

    return (
      <Transition key={child.key} {...clonedAnimationConfig}>
        {child}
      </Transition>
    );
  });
};

export default Stagger;
