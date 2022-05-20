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

let BullhornO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M796.444672 154.918912l-326.22592 186.41408H227.555328v341.334016h242.663424l326.22592 186.41408V154.918912z m56.88832 0v714.162176c0 31.419392-25.469952 56.889344-56.88832 56.889344a56.889344 56.889344 0 0 1-28.224512-7.49568l-313.10848-178.919424H227.554304c-31.418368 0-56.88832-25.469952-56.88832-56.88832V341.332992c0-31.418368 25.469952-56.88832 56.88832-56.88832h227.555328l313.10848-178.919424c27.27936-15.588352 62.030848-6.110208 77.6192 21.168128a56.889344 56.889344 0 0 1 7.49568 28.225536z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M387.971072 910.222336h54.63552L408.4736 739.555328h-54.63552l34.132992 170.667008zM512 284.444672v455.110656h-45.51168l31.90272 159.510528c6.161408 30.808064-13.81888 60.778496-44.627968 66.940928a56.889344 56.889344 0 0 1-11.15648 1.103872h-54.63552c-27.117568 0-50.465792-19.140608-55.784448-45.73184l-47.741952-238.711808h170.665984v-398.22336H512z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

BullhornO.defaultProps = {
  size: 18,
};

BullhornO = React.memo ? React.memo(BullhornO) : BullhornO;

export default BullhornO;
