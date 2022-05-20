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

let Success: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M122.28096 536.623104c-9.940992-9.925632-11.548672-25.360384-2.78528-36.407296l20.487168-25.828352c8.397824-10.58816 24.108032-13.246464 35.211264-5.835776l177.3312 118.35904c9.353216 6.243328 25.452544 5.430272 34.185216-1.654784l468.5824-380.16c10.532864-8.54528 27.030528-7.817216 36.261888 1.400832l11.542528 11.52512c10.04544 10.03008 9.314304 25.951232-1.215488 36.465664l-502.92736 502.183936c-15.64672 15.624192-41.337856 14.94016-57.445376-1.142784l-219.22816-218.9056z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Success.defaultProps = {
  size: 18,
};

Success = React.memo ? React.memo(Success) : Success;

export default Success;
