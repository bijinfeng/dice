import React, { forwardRef, useMemo, useState } from 'react';
import { View } from 'react-native';
import { TabsContext, TabsContextState } from '../TabsContext';
import TabsBar from '../TabsBar';
import TabsContent from '../TabsContent';
import { parseChildList } from '../utils';
import type { TabsProps, TabPaneProps } from '../type';

const Tabs = forwardRef<View, TabsProps>((props, ref) => {
  const { children, style } = props;
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const childrenList = useMemo(() => parseChildList<TabPaneProps>(children), [children]);

  const contextState = useMemo<TabsContextState>(
    () => ({
      props,
      selectedIndex: currentIndex,
      setCurrentIndex,
    }),
    [currentIndex, props]
  );

  return (
    <TabsContext.Provider value={contextState}>
      <View style={style} ref={ref}>
        <TabsBar navs={childrenList} />
        <TabsContent
          animated={props.animated}
          swipeable={props.swipeable}
          duration={props.duration}
          currentIndex={currentIndex}
          onChange={setCurrentIndex}
        >
          {childrenList.map((item, index) => React.cloneElement(item.node, { index }))}
        </TabsContent>
      </View>
    </TabsContext.Provider>
  );
});

Tabs.defaultProps = {
  type: 'line',
  duration: 300,
  offsetTop: 0,
  ellipsis: true,
  lazyRender: true,
  active: 0,
  align: 'center',
};

export default Tabs;
