import React, { memo } from 'react';
import Svg, { Path } from 'react-native-svg';

import type { IconCommonFillProps } from './interface';

type IconPhotoFillProps = IconCommonFillProps;

const IconPhotoFill: React.FC<IconPhotoFillProps> = ({
  size = 24,
  color = '#666',
  ...restProps
}) => {
  return (
    <Svg
      {...restProps}
      height={size}
      width={size}
      viewBox="0 0 1000 1000"
      rotation={180}
      origin="500,500"
    >
      <Path
        fill={color}
        d="M306 722L306 722Q271 722 246.50 697.50Q222 673 222 638.50Q222 604 246.50 580Q271 556 305.50 556Q340 556 364.50 580Q389 604 389 638.50Q389 673 364.50 697.50Q340 722 306 722ZM889 398L654 672Q637 692 611.50 692Q586 692 569 672L569 672L333 389L262 461Q245 477 222 477Q199 477 183 461L183 461L111 389L111 778L889 778L889 398ZM889 833L889 833L111 833Q88 833 72 817Q56 801 56 778L56 778L56 222Q56 199 72 183Q88 167 111 167L111 167L889 167Q912 167 928 183Q944 199 944 222L944 222L944 778Q944 801 928 817Q912 833 889 833Z"
      />
    </Svg>
  );
};

export default memo(IconPhotoFill);
