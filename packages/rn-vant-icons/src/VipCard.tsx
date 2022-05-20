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

let VipCard: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M967.110656 284.444672H56.889344v-56.889344c0-31.418368 25.469952-56.88832 56.88832-56.88832H910.22336c31.418368 0 56.88832 25.469952 56.88832 56.88832v56.889344z m0 56.88832v455.11168c0 31.418368-25.469952 56.88832-56.88832 56.88832H113.77664c-31.418368 0-56.88832-25.469952-56.88832-56.88832V341.332992h910.221312z m-721.52064 97.622016l86.697984 243.712h48.128l86.699008-243.712h-43.350016l-66.900992 198.656h-1.024l-66.900992-198.656h-43.350016z m247.124992 0v243.712h39.936v-243.712h-39.936z m87.721984 0v243.712h39.936v-93.526016h60.416c59.392 0 89.088-25.257984 89.088-75.433984 0-49.835008-29.696-74.752-88.404992-74.752h-101.035008z m39.936 34.132992H678.4c17.408 0 30.379008 3.072 38.571008 9.556992 8.192 6.144 12.628992 16.384 12.628992 31.062016 0 14.676992-4.096 25.257984-12.288 31.744-8.192 6.144-21.163008 9.556992-38.912 9.556992h-58.027008v-81.92z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

VipCard.defaultProps = {
  size: 18,
};

VipCard = React.memo ? React.memo(VipCard) : VipCard;

export default VipCard;
