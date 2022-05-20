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

let Hot: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M371.86048 173.672448l99.912704-99.913728c22.216704-22.216704 58.236928-22.216704 80.453632 0l99.912704 99.913728h141.299712c31.418368 0 56.88832 25.469952 56.88832 56.88832v141.299712l99.913728 99.912704c22.216704 22.216704 22.216704 58.236928 0 80.453632l-99.913728 99.912704v141.299712c0 31.418368-25.469952 56.88832-56.88832 56.88832H652.13952l-99.912704 99.913728c-22.216704 22.216704-58.236928 22.216704-80.453632 0l-99.912704-99.913728H230.560768c-31.418368 0-56.88832-25.469952-56.88832-56.88832V652.13952L73.75872 552.226816c-22.216704-22.216704-22.216704-58.236928 0-80.453632l99.913728-99.912704V230.560768c0-31.418368 25.469952-56.88832 56.88832-56.88832h141.299712zM256 429.48096v165.03808h50.08384V527.75936h54.726656v66.758656h50.304v-165.03808h-50.304v57.752576H306.08384v-57.752576H256z m182.090752 82.63168c0 19.288064 3.72224 35.34848 11.16672 48.183296 7.44448 12.833792 17.155072 22.214656 29.1328 28.143616 11.976704 5.92896 27.10528 8.89344 45.38368 8.89344 17.984512 0 33.002496-3.433472 45.053952-10.300416 12.050432-6.866944 21.26336-16.474112 27.639808-28.819456 6.375424-12.346368 9.563136-28.163072 9.563136-47.45216 0-26.56768-7.297024-47.224832-21.891072-61.97248-14.594048-14.747648-35.3792-22.121472-62.355456-22.121472-26.312704 0-46.839808 7.504896-61.581312 22.514688-14.741504 15.010816-22.112256 35.987456-22.112256 62.930944z m50.08384 0.22528c0-16.812032 3.058688-28.857344 9.176064-36.13696 6.117376-7.28064 14.225408-10.919936 24.323072-10.919936 10.540032 0 18.88768 3.584 25.04192 10.750976 6.15424 7.168 9.23136 18.518016 9.23136 34.054144 0 18.46272-2.948096 31.258624-8.844288 38.38976-5.896192 7.129088-14.225408 10.693632-24.9856 10.693632-10.467328 0-18.740224-3.639296-24.82176-10.919936-6.080512-7.28064-9.120768-19.2512-9.120768-35.91168z m127.58528-82.85696v40.753152h51.078144v124.284928h50.08384V470.234112H768v-40.753152H615.759872z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Hot.defaultProps = {
  size: 18,
};

Hot = React.memo ? React.memo(Hot) : Hot;

export default Hot;
