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

let FreePostage: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 56.889344c251.35104 0 455.110656 203.759616 455.110656 455.110656S763.35104 967.110656 512 967.110656 56.889344 763.35104 56.889344 512 260.64896 56.889344 512 56.889344z m0 56.88832c-219.931648 0-398.222336 178.290688-398.222336 398.222336 0 219.931648 178.290688 398.222336 398.222336 398.222336 219.931648 0 398.222336-178.290688 398.222336-398.222336 0-219.931648-178.290688-398.222336-398.222336-398.222336zM403.446784 295.944192c14.139392 0 25.6 11.461632 25.6 25.6v61.157376h61.0304c40.91904 0 74.263552 31.81056 74.263552 70.817792v171.27936c0 38.987776-33.350656 70.791168-74.263552 70.791168h-164.36224c-40.892416 0-74.263552-31.81056-74.263552-70.791168V453.51936c0-39.001088 33.363968-70.817792 74.262528-70.817792h52.13184l0.001024-61.157376c0-13.997056 11.23328-25.370624 25.177088-25.595904z m306.9952 86.757376c37.750784 0 67.8912 31.978496 67.8912 70.4512v82.3808c0 14.138368-11.461632 25.6-25.6 25.6h-46.0288c-14.138368 0-25.6-11.461632-25.6-25.6s11.461632-25.6 25.6-25.6h20.4288v-56.7808c0-10.851328-7.917568-19.2512-16.6912-19.2512h-49.7408c-8.782848 0-16.7168 8.410112-16.7168 19.2512v187.1616c0 14.138368-11.461632 25.6-25.6 25.6s-25.6-11.461632-25.6-25.6V453.152768c0-38.47168 30.16704-70.4512 67.9168-70.4512z m-332.5952 177.967104h-69.507072v64.130048c0 6.936576 7.308288 13.902848 17.374208 13.902848h52.13184v-78.032896z m129.604608 0H429.04576v78.032896h61.0304c10.08128 0 17.374208-6.95296 17.374208-13.902848v-64.130048zM377.84576 439.589888h-52.13184c-10.068992 0-17.374208 6.967296-17.374208 13.929472l-0.001024 55.949312h69.507072v-69.878784z m112.2304 0h-61.0304v69.87776h78.404608V453.51936c0-6.974464-7.29088-13.929472-17.374208-13.929472z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

FreePostage.defaultProps = {
  size: 18,
};

FreePostage = React.memo ? React.memo(FreePostage) : FreePostage;

export default FreePostage;
