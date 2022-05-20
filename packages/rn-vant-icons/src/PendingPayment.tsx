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

let PendingPayment: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M113.777664 227.555328v568.889344H910.22336V227.555328H113.77664z m0-56.88832H910.22336c31.418368 0 56.88832 25.469952 56.88832 56.88832v568.889344c0 31.418368-25.469952 56.88832-56.88832 56.88832H113.77664c-31.418368 0-56.88832-25.469952-56.88832-56.88832V227.555328c0-31.418368 25.469952-56.88832 56.88832-56.88832zM938.667008 369.77664v56.889344H625.77664c-47.128576 0-85.332992 38.20544-85.332992 85.332992 0 47.128576 38.20544 85.332992 85.332992 85.332992h312.889344v56.889344H625.77664c-78.546944 0-142.222336-63.675392-142.222336-142.222336 0-78.546944 63.675392-142.222336 142.22336-142.222336h312.88832zM696.889344 554.667008c-23.564288 0-42.667008-19.10272-42.667008-42.667008s19.10272-42.667008 42.667008-42.667008c23.563264 0 42.665984 19.10272 42.665984 42.667008s-19.10272 42.667008-42.665984 42.667008z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

PendingPayment.defaultProps = {
  size: 18,
};

PendingPayment = React.memo ? React.memo(PendingPayment) : PendingPayment;

export default PendingPayment;
