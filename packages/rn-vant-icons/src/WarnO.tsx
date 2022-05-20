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

let WarnO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M509.39392 227.566592l-338.726912 622.55104h677.453824l-338.726912-622.55104z m49.9712-27.189248l338.726912 622.55104c15.015936 27.598848 4.815872 62.144512-22.781952 77.160448a56.889344 56.889344 0 0 1-27.189248 6.91712H170.667008c-31.419392 0-56.889344-25.469952-56.889344-56.88832a56.889344 56.889344 0 0 1 6.918144-27.189248l338.726912-622.55104c15.015936-27.597824 49.5616-37.797888 77.159424-22.781952a56.889344 56.889344 0 0 1 22.782976 22.781952z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M483.823616 409.63072c-0.093184-4.202496 2.906112-7.60832 7.31136-7.60832h42.256384c4.13184 0 7.40864 3.19488 7.31136 7.60832l-6.018048 269.228032c-0.094208 4.201472-3.662848 7.60832-7.519232 7.60832h-29.805568c-4.058112 0-7.419904-3.19488-7.518208-7.60832l-6.018048-269.228032z m28.439552 362.16832c-15.710208 0-28.444672-12.734464-28.444672-28.443648 0-15.709184 12.734464-28.444672 28.444672-28.444672 15.70816 0 28.443648 12.735488 28.443648 28.444672s-12.734464 28.444672-28.443648 28.444672z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

WarnO.defaultProps = {
  size: 18,
};

WarnO = React.memo ? React.memo(WarnO) : WarnO;

export default WarnO;
