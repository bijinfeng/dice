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

let InfoO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 910.222336c219.931648 0 398.222336-178.290688 398.222336-398.222336 0-219.931648-178.290688-398.222336-398.222336-398.222336C292.068352 113.777664 113.777664 292.068352 113.777664 512c0 219.931648 178.290688 398.222336 398.222336 398.222336z m0 56.88832C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M540.444672 711.110656h28.444672c15.70816 0 28.443648 12.735488 28.443648 28.444672S584.598528 768 568.889344 768H455.110656c-15.70816 0-28.443648-12.735488-28.443648-28.444672s12.734464-28.444672 28.443648-28.444672h28.444672v-256h-14.222336c-15.70816 0-28.443648-12.734464-28.443648-28.443648 0-15.710208 12.734464-28.444672 28.443648-28.444672H512c15.709184 0 28.444672 12.734464 28.444672 28.444672v284.443648z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M512 298.667008m-42.667008 0a42.667008 42.667008 0 1 0 85.334016 0 42.667008 42.667008 0 1 0-85.334016 0Z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

InfoO.defaultProps = {
  size: 18,
};

InfoO = React.memo ? React.memo(InfoO) : InfoO;

export default InfoO;
