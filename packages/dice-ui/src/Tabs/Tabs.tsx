import React, { forwardRef, useMemo } from 'react';
import { View } from 'react-native';
import isFunction from 'lodash-es/isFunction';
import { useControllableValue, useMemoizedFn } from '../hooks';
import { TabsContext, TabsContextState } from './TabsContext';
import TabsBar from './TabsBar';
import TabsContent from './TabsContent';
import { parseChildList } from './utils';
import type { TabsProps, TabPaneProps } from './type';

const Tabs = forwardRef<View, TabsProps>((props, ref) => {
  const { children, style } = props;
  const [currentIndex, setCurrentIndex] = useControllableValue<number>(props, {
    defaultValue: 0,
    valuePropName: 'active',
    trigger: 'onChange',
  });

  const childrenList = useMemo(() => parseChildList<TabPaneProps>(children), [children]);

  const beforeChange = useMemoizedFn((idx: number): Promise<boolean> => {
    return Promise.resolve(isFunction(props.beforeChange) ? props.beforeChange(idx) : true);
  });

  const handleTabChange = useMemoizedFn(async (idx: number) => {
    const couldChange = await beforeChange(idx);
    couldChange && setCurrentIndex(idx);
  });

  const contextState = useMemo<TabsContextState>(
    () => ({
      props,
      selectedIndex: currentIndex,
      setCurrentIndex: handleTabChange,
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
          onChange={handleTabChange}
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
  ellipsis: true,
  lazyRender: true,
  align: 'center',
};

export default Tabs;
