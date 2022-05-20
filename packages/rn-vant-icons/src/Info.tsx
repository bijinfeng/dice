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

let Info: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 56.889344c251.35104 0 455.110656 203.759616 455.110656 455.110656S763.35104 967.110656 512 967.110656 56.889344 763.35104 56.889344 512 260.64896 56.889344 512 56.889344z m28.444672 341.332992h-99.555328v56.88832h42.665984v256h-56.88832V768h170.665984v-56.889344h-56.88832V398.22336zM512 256c-23.564288 0-42.667008 19.10272-42.667008 42.667008s19.10272 42.665984 42.667008 42.665984 42.667008-19.101696 42.667008-42.665984C554.667008 275.10272 535.564288 256 512 256z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Info.defaultProps = {
  size: 18,
};

Info = React.memo ? React.memo(Info) : Info;

export default Info;
