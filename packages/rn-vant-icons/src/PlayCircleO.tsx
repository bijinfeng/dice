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

let PlayCircleO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M683.776 534.258688L473.307136 702.631936c-12.26752 9.814016-30.16704 7.825408-39.980032-4.442112a28.444672 28.444672 0 0 1-6.233088-17.769472V343.67488c0-15.70816 12.734464-28.443648 28.444672-28.443648a28.444672 28.444672 0 0 1 17.768448 6.232064L683.776 489.836544c12.26752 9.812992 14.256128 27.713536 4.442112 39.980032a28.444672 28.444672 0 0 1-4.442112 4.442112zM512 910.22336c219.931648 0 398.222336-178.290688 398.222336-398.222336 0-219.931648-178.290688-398.222336-398.222336-398.222336-219.931648 0-398.222336 178.290688-398.222336 398.222336 0 219.931648 178.290688 398.222336 398.222336 398.222336z m0 56.88832C260.64896 967.110656 56.889344 763.35104 56.889344 512S260.64896 56.889344 512 56.889344 967.110656 260.64896 967.110656 512 763.35104 967.110656 512 967.110656z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

PlayCircleO.defaultProps = {
  size: 18,
};

PlayCircleO = React.memo ? React.memo(PlayCircleO) : PlayCircleO;

export default PlayCircleO;
