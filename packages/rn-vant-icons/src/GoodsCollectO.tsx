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

let GoodsCollectO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M735.770624 853.2224l-3.54816 0.110592c1.183744 0 2.367488-0.036864 3.54816-0.110592z m0 0c-1.180672 0.073728-2.364416 0.110592-3.54816 0.110592l3.54816-0.110592zM767.97952 512l-10.97728-231.104512c-1.87392-29.98272-26.737664-53.34016-56.778752-53.34016H259.555328c-30.041088 0-54.903808 23.35744-56.777728 53.34016l-32 512a56.889344 56.889344 0 0 0-0.110592 3.549184c0 31.418368 25.469952 56.88832 56.88832 56.88832H512v-56.88832H227.555328l32-512h440.667136l10.9312 230.254592L767.978496 512z m0 0l-10.97728-231.104512c-1.87392-29.98272-26.737664-53.34016-56.778752-53.34016H259.555328c-30.041088 0-54.903808 23.35744-56.777728 53.34016l-32 512a56.889344 56.889344 0 0 0-0.110592 3.549184c0 31.418368 25.469952 56.88832 56.88832 56.88832H512v-56.88832H227.555328l32-512h440.667136l10.9312 230.254592L767.978496 512z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M798.900224 597.332992c61.778944 0 111.322112 52.594688 111.322112 116.445184-0.043008 2.593792-0.044032 2.69312-0.136192 4.278272l0.016384 1.011712 0.003072 0.22016c0 11.22816-2.347008 22.636544-6.670336 34.217984-1.67936 4.856832-3.762176 9.716736-9.161728 19.24608 1.390592-1.95584 1.43872-2.024448 1.622016-2.3552l0.018432-0.034816c-0.021504 0.03584 0.011264-0.024576 0.909312-1.66912l-0.637952 1.220608c0.126976-0.203776 0.126976-0.203776-0.44544 0.95232-1.337344 2.65216-2.660352 5.106688-3.540992 6.38976a206.485504 206.485504 0 0 1-6.535168 10.677248c-12.822528 19.628032-30.307328 39.849984-51.37408 60.470272-14.72512 14.414848-30.380032 28.225536-46.241792 41.199616-9.423872 7.707648-27.086848 21.39136-22.285312 17.553408-7.579648 6.00576-16.869376 9.252864-26.445824 9.252864-9.289728 0-18.310144-3.001344-25.92768-8.82176l-0.473088-0.365568 0.119808 0.095232c4.478976 3.57376-13.105152-10.0096-22.412288-17.60256-15.83104-12.914688-31.439872-26.661888-46.125056-41.027584-21.716992-21.243904-39.615488-42.090496-52.525056-62.35136-5.880832-9.229312-10.69056-18.294784-14.385152-27.36128-0.254976-0.647168-0.254976-0.647168-0.407552-1.056768-5.28896-13.343744-8.072192-26.253312-8.072192-38.656-0.161792-2.167808-0.219136-3.565568-0.219136-5.48352 0-63.873024 49.52576-116.445184 111.321088-116.445184 21.233664 0 41.754624 6.452224 59.338752 18.1504 17.5616-11.698176 38.093824-18.1504 59.35104-18.1504z m0 56.889344c-14.189568 0-27.99616 6.321152-38.26688 17.63328l-21.005312 23.135232-21.06368-23.084032c-10.36288-11.354112-24.194048-17.68448-38.35392-17.68448-29.592576 0-54.432768 26.368-54.432768 59.55584 0 0.106496 0.053248 2.419712 0.159744 6.941696 0.03072-0.323584 0.031744-0.347136 0.054272-1.230848 0.006144 4.488192 1.284096 10.41408 4.059136 17.406976 0.262144 0.68608 0.354304 0.925696 0.406528 1.067008 2.258944 5.472256 5.43744 11.439104 9.49248 17.803264 10.23488 16.06144 25.464832 33.799168 44.329984 52.25472 13.350912 13.060096 27.712512 25.70752 42.305536 37.613568 3.4816 2.840576 8.37632 6.71232 12.699648 10.09664 4.324352-3.396608 9.233408-7.29088 12.744704-10.162176 14.639104-11.974656 29.06112-24.696832 42.46528-37.818368 18.359296-17.9712 33.293312-35.243008 43.541504-50.930688 1.726464-2.64192 3.306496-5.2224 5.55008-9.07264 0.273408-0.421888 0.423936-0.700416 1.267712-2.296832 0.519168-1.110016 0.519168-1.110016 1.016832-2.062336l0.944128-1.728512a63.183872 63.183872 0 0 0 3.08224-7.378944c2.248704-6.035456 3.254272-10.76224 3.316736-14.610432l0.003072-0.381952c0.004096 0.272384 0.004096 0.272384-0.014336-3.008512 0.0512-0.89088 0.0512-0.89088 0.086016-1.45408 0.04096-0.746496 0.04096-0.746496 0.044032-1.047552 0-33.16736-24.8576-59.55584-54.432768-59.55584zM512 796.444672c15.709184 0 28.444672 12.734464 28.444672 28.444672 0 15.70816-12.735488 28.443648-28.444672 28.443648s-28.444672-12.734464-28.444672-28.443648c0-15.710208 12.735488-28.444672 28.444672-28.444672z m227.555328-312.889344C755.264512 483.555328 768 496.29184 768 512s-12.735488 28.444672-28.444672 28.444672S711.110656 527.70816 711.110656 512s12.735488-28.444672 28.444672-28.444672z m-256-426.665984c97.202176 0 176 78.7968 176 176h-56.88832c0-65.783808-53.327872-119.11168-119.11168-119.11168-65.782784 0-119.11168 53.327872-119.11168 119.11168h-56.88832c0-97.202176 78.797824-176 176-176z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

GoodsCollectO.defaultProps = {
  size: 18,
};

GoodsCollectO = React.memo ? React.memo(GoodsCollectO) : GoodsCollectO;

export default GoodsCollectO;