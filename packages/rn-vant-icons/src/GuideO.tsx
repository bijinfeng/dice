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

let GuideO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M101.993472 453.361664l-4.31104 2.33984c-19.93216 13.03552-15.633408 45.1072 8.98048 51.26656l301.84448 75.469824 75.534336 301.908992c6.571008 26.25536 42.624 29.395968 53.607424 4.66944L855.830528 172.7488c10.575872-23.808-13.760512-48.144384-37.568512-37.568512L101.994496 453.361664z m673.3568-248.112128L513.80224 781.244416l-56.65792-237.364224-1.650688-4.873216c-3.458048-7.753728-10.32704-13.548544-18.792448-15.568896l-237.386752-56.682496 576.034816-261.506048z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

GuideO.defaultProps = {
  size: 18,
};

GuideO = React.memo ? React.memo(GuideO) : GuideO;

export default GuideO;
