import React, { memo } from 'react';
import Svg, { Path } from 'react-native-svg';

import type { IconCommonFillProps } from './interface';

type IconPhotoFailFillProps = IconCommonFillProps;

const IconPhotoFailFill: React.FC<IconPhotoFailFillProps> = ({
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
        d="M112 833L389 833L371 777L112 777L112 389L183 460Q198 475 219 476.50Q240 478 257 465L257 465L262 460L334 389L437 512L556 333L500 166L112 166Q90 166 74.50 180.50Q59 195 56 215L56 215L56 222L56 777Q56 799 70 814.50Q84 830 105 833L105 833L112 833ZM500 833L889 833Q911 833 926.50 819Q942 805 945 784L945 784L945 777L945 222Q945 201 931 185Q917 169 896 167L896 167L889 166L612 166L667 333L498 586L570 671Q585 690 608.50 691.50Q632 693 650 677L650 677L654 672L889 398L889 777L482 777L500 833ZM306 722L306 722Q329 722 348 710L348 710L334 666L379 598Q368 579 348.50 567Q329 555 306 555L306 555Q272 555 247.50 579.50Q223 604 223 638.50Q223 673 247.50 697.50Q272 722 306 722Z"
      />
    </Svg>
  );
};

export default memo(IconPhotoFailFill);
