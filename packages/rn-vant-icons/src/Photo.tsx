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

let Photo: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M312.916992 284.422144c-47.104 0-85.332992 38.228992-85.332992 85.332992s38.228992 85.332992 85.332992 85.332992 85.334016-38.228992 85.334016-85.332992-38.230016-85.332992-85.334016-85.332992m356.665344 51.10784c-22.868992-26.73664-64.340992-26.452992-86.868992 0.626688L341.332992 625.77664l-73.499648-73.556992c-22.244352-22.243328-58.25536-22.243328-80.498688 0l-73.556992 73.556992V227.555328H910.22336v388.721664l-240.64-280.745984z m240.64-164.864H113.77664c-31.403008 0-56.88832 25.430016-56.88832 56.889344v568.88832c0 31.403008 25.485312 56.889344 56.88832 56.889344H910.22336c31.459328 0 56.88832-25.486336 56.88832-56.88832V227.555328c0-31.459328-25.428992-56.88832-56.88832-56.88832z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Photo.defaultProps = {
  size: 18,
};

Photo = React.memo ? React.memo(Photo) : Photo;

export default Photo;
