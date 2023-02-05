/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

import { View } from "react-native-web";

import * as React from "react";

let isDebugEnabled = false;

export function isEnabled(): boolean {
  if (__DEV__) {
    return isDebugEnabled;
  }
  return false;
}

export function setEnabled(value: boolean): void {
  if (__DEV__) {
    isDebugEnabled = value;
  }
}

/**
 * Displays a debug overlay to visualize press targets when enabled via the
 * React Native Inspector. Calls to this module should be guarded by `__DEV__`,
 * for example:
 *
 *   return (
 *     <View>
 *       {children}
 *       {__DEV__ ? (
 *         <PressabilityDebugView color="..." hitSlop={props.hitSlop} />
 *       ) : null}
 *     </View>
 *   );
 *
 */
export function PressabilityDebugView() {
  if (__DEV__) {
    if (isEnabled()) {
      return <View pointerEvents="none" />;
    }
  }
  return null;
}
