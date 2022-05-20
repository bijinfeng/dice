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

let Edit: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M701.315072 121.997312l120.713216 120.71424c11.111424 11.111424 11.111424 29.126656 0 40.23808l-100.594688 100.594688-160.95232-160.95232 100.595712-100.594688c11.1104-11.1104 29.126656-11.1104 40.23808 0z m-20.119552 60.357632l-40.23808 40.23808 80.47616 80.47616 40.23808-40.23808-80.47616-80.47616z m200.687616 671.076352c15.714304 0 28.452864 12.73856 28.452864 28.45184C910.336 897.59744 897.59744 910.336 881.883136 910.336H142.116864C126.40256 910.336 113.664 897.59744 113.664 881.883136c0-15.71328 12.73856-28.45184 28.452864-28.45184h739.766272zM520.2432 262.83008l160.95232 160.95232L359.29088 745.68704l-159.33952 31.86688c-15.408128 3.08224-30.398464-6.909952-33.47968-22.319104a28.452864 28.452864 0 0 1 0-11.160576l31.86688-159.33952 321.90464-321.90464z m0 80.47616L250.760192 612.788224l-20.118528 100.595712 100.594688-20.119552L600.71936 423.7824l-80.47616-80.47616z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Edit.defaultProps = {
  size: 18,
};

Edit = React.memo ? React.memo(Edit) : Edit;

export default Edit;
