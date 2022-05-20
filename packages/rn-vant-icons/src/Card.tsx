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

let Card: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M568.604672 654.676992c0 15.702016 12.742656 28.444672 28.444672 28.444672h170.665984c15.702016 0 28.444672-12.742656 28.444672-28.444672 0-15.700992-12.742656-28.443648-28.444672-28.443648H597.049344c-15.702016 0-28.444672 12.742656-28.444672 28.443648z m-511.715328-313.344h910.221312v455.11168c0 31.459328-25.428992 56.88832-56.88832 56.88832H113.77664c-31.403008 0-56.88832-25.428992-56.88832-56.88832V341.332992z m910.221312-113.77664v56.88832H56.889344v-56.889344c0-31.401984 25.485312-56.88832 56.88832-56.88832H910.22336c31.459328 0 56.88832 25.486336 56.88832 56.88832z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Card.defaultProps = {
  size: 18,
};

Card = React.memo ? React.memo(Card) : Card;

export default Card;
