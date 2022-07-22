import React, { memo } from 'react';
import Svg, { SvgProps, G, Polyline } from 'react-native-svg';

export const CheckMark = memo((props: SvgProps) => (
  <Svg viewBox="0 0 17 13" width={17} height={13} {...props}>
    <G
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <G transform="translate(-2832.000000, -1103.000000)" stroke="#FFFFFF" strokeWidth="3">
        <G transform="translate(2610.000000, 955.000000)">
          <G transform="translate(24.000000, 91.000000)">
            <G transform="translate(179.177408, 36.687816)">
              <Polyline points="34.2767388 22 24.797043 31.4796958 21 27.6826527" />
            </G>
          </G>
        </G>
      </G>
    </G>
  </Svg>
));
