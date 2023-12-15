import React, { useMemo } from 'react';
import { Pressable, View } from 'react-native';
import type { SpaceProps } from './type';
import { flexAlign, flexJustify } from './style';

const Space = (props: SpaceProps): JSX.Element => {
  const {
    children,
    divider,
    direction = 'horizontal',
    wrap,
    align,
    justify,
    gap = 8,
    ...rest
  } = props;

  const childList = useMemo<React.ReactElement[]>(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    () => React.Children.map(children, c => c).filter(c => c !== null && c !== undefined),
    [children]
  );

  return (
    <Pressable
      {...rest}
      style={[
        rest.style,
        {
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
          flexWrap: wrap ? 'wrap' : 'nowrap',
        },
        align && { alignItems: flexAlign[align] },
        justify && { justifyContent: flexJustify[justify] },
      ]}
    >
      {childList.map((child, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <React.Fragment key={idx}>
          <View style={idx > 0 && { marginLeft: gap }}>{child}</View>
          {!!divider && idx !== childList.length - 1 && <View>{divider}</View>}
        </React.Fragment>
      ))}
    </Pressable>
  );
};

export default Space;
