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

let GemO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M837.52448 113.777664c11.65312 0 22.12864 7.108608 26.433536 17.938432L965.3248 386.740224a28.444672 28.444672 0 0 1-5.13024 29.356032L532.38272 899.551232c-10.411008 11.764736-28.387328 12.86144-40.15104 2.451456-0.89088-0.78848-1.731584-1.631232-2.516992-2.52416L64.813056 415.986688a28.444672 28.444672 0 0 1-5.136384-29.105152l99.381248-254.988288a28.444672 28.444672 0 0 1 26.503168-18.11456h651.963392zM642.243584 426.665984h-271.9744l140.793856 348.192768 131.180544-348.192768z m232.63232 0H703.035392l-127.404032 338.16576 299.24352-338.16576z m-565.971968 0H149.93408L444.387328 761.72288 308.903936 426.665984z m61.728768-256H205.0048l-77.604864 199.11168h185.2672l57.966592-199.11168z m199.2704 0H429.883392l-57.965568 199.11168H641.52576l-71.621632-199.11168z m248.318976 0H630.361088l71.620608 199.11168h195.382272l-79.141888-199.110656z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

GemO.defaultProps = {
  size: 18,
};

GemO = React.memo ? React.memo(GemO) : GemO;

export default GemO;
