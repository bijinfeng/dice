import React, { FC, useMemo } from 'react';
import { Cell, Transitions, useTheme, Portal, useSetState } from '@pingtou/rn-vant';
import { ScrollView, View, ViewStyle, Dimensions } from 'react-native';
import { DemoBlock } from '../../components';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type State = {
  fade: boolean;
  slide: boolean;
};

const TransitionsDemo: FC = () => {
  const theme = useTheme();
  const [state, setState] = useSetState<State>({
    fade: false,
    slide: false,
  });

  const boxStyle = useMemo<ViewStyle>(
    () => ({
      width: 100,
      height: 100,
      backgroundColor: theme.primary_color,
      borderRadius: theme.border_radius_md,
      position: 'absolute',
      left: windowWidth / 2 - 50,
      top: windowHeight / 2 - 50,
    }),
    [theme]
  );

  const close = (type: string) => {
    setState({ [type]: false });
  };

  const open = (type: string) => {
    setState({ [type]: true });

    setTimeout(() => {
      close(type);
    }, 2000);
  };

  return (
    <ScrollView>
      <DemoBlock title="动画">
        <Cell.Group inset>
          <Cell title="Fade" isLink onPress={() => open('fade')} />
          <Cell title="Slide" isLink onPress={() => open('slide')} />
        </Cell.Group>
      </DemoBlock>
      <Portal>
        <View
          style={{
            position: 'absolute',
          }}
        >
          {/* fade */}
          <Transitions.Fade in={state.fade}>
            <View style={boxStyle} />
          </Transitions.Fade>
        </View>
      </Portal>
    </ScrollView>
  );
};

export default TransitionsDemo;
