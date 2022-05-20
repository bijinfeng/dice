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

let Contact: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 597.332992c225.82272 0 398.222336 85.388288 398.222336 228.170752 0 61.536256-50.016256 108.33408-124.348416 108.33408h-547.74784c-74.776576 0-124.348416-45.830144-124.348416-108.33408 0-140.977152 174.35136-228.170752 398.222336-228.170752z m0 56.889344c-196.484096 0-341.332992 72.439808-341.332992 171.281408 0 30.04416 23.14752 51.44576 67.459072 51.44576h547.74784c43.726848 0 67.459072-22.20544 67.459072-51.44576 0-100.49024-142.926848-171.281408-341.332992-171.281408zM512 455.110656c94.256128 0 170.667008-76.409856 170.667008-170.665984 0-94.257152-76.41088-170.667008-170.667008-170.667008s-170.667008 76.41088-170.667008 170.667008S417.743872 455.110656 512 455.110656zM512 512c-125.67552 0-227.555328-101.879808-227.555328-227.555328S386.32448 56.889344 512 56.889344s227.555328 101.879808 227.555328 227.555328S637.67552 512 512 512z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Contact.defaultProps = {
  size: 18,
};

Contact = React.memo ? React.memo(Contact) : Contact;

export default Contact;
