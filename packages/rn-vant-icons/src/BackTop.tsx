/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let BackTop: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512.631808 253.652992c7.713792-0.35328 15.543296 2.414592 21.433344 8.30464l281.726976 281.726976c11.113472 11.113472 11.113472 29.1328 0 40.246272-11.114496 11.113472-29.1328 11.113472-40.247296 0L540.971008 349.356032v518.56896c0 15.7184-12.741632 28.459008-28.459008 28.459008-15.717376 0-28.459008-12.741632-28.459008-28.459008V349.356032L249.479168 583.93088c-11.114496 11.113472-29.1328 11.113472-40.247296 0-11.113472-11.113472-11.113472-29.1328 0-40.246272l281.726976-281.726976c5.920768-5.920768 13.801472-8.686592 21.553152-8.29952zM797.099008 128c15.717376 0 28.457984 12.741632 28.457984 28.459008 0 15.717376-12.740608 28.457984-28.457984 28.457984H227.924992c-15.717376 0-28.457984-12.740608-28.457984-28.457984 0-15.7184 12.740608-28.459008 28.457984-28.459008h569.174016z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

BackTop.defaultProps = {
  size: 18,
};

BackTop = React.memo ? React.memo(BackTop) : BackTop;

export default BackTop;
