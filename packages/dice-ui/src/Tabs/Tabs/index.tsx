import React, { forwardRef, useMemo, useState } from 'react';
import { View } from 'react-native';
import { TabsContext, TabsContextState } from '../TabsContext';
import TabsBar from '../TabsBar';
import TabsContent from '../TabsContent';
import { useOrientation } from '../../hooks';
import { parseChildList, getScreenWidth } from '../utils';
import type { TabsProps, TabPaneProps } from '../type';

const Tabs = forwardRef<View, TabsProps>((props, ref) => {
  const { type, children } = props;
  const [selectedIndex, setCurrentIndex] = useState<number>(0);
  const [screenWidth, setScreenWidth] = useState<number>(getScreenWidth());

  const childrenList = useMemo(() => parseChildList<TabPaneProps>(children), [children]);

  useOrientation({
    // 监听屏幕方向的变化，获取屏幕最新的宽度
    onOrientationChange: () => {
      setScreenWidth(getScreenWidth());
    },
  });

  const contextState = useMemo<TabsContextState>(
    () => ({
      props,
      selectedIndex,
      setCurrentIndex,
      containerWidth: screenWidth,
    }),
    [selectedIndex, screenWidth, props]
  );

  return (
    <TabsContext.Provider value={contextState}>
      <View ref={ref}>
        <TabsBar navs={childrenList} type={type} />
        <TabsContent
          animated={props.animated}
          swipeable={props.swipeable}
          duration={props.duration}
          currentIndex={selectedIndex}
          onChange={setCurrentIndex}
        >
          {childrenList.map((item, index) => React.cloneElement(item.node, { index }))}
        </TabsContent>
      </View>
    </TabsContext.Provider>
  );
});

export default Tabs;
