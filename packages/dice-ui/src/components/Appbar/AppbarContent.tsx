import React, { FC } from 'react';
import {
  Platform,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import color from 'color';

import Text from '../Text';
import { useTheme } from '../Theme';
import { white } from '../../styles/colors';

import type { $RemoveChildren } from '../../types';

type Props = $RemoveChildren<typeof View> & {
  /**
   * Custom color for the text.
   */
  color?: string;
  /**
   * Text for the title.
   */
  title: React.ReactNode;
  /**
   * Style for the title.
   */
  titleStyle?: StyleProp<TextStyle>;
  /**
   * Reference for the title.
   */
  titleRef?: React.RefObject<Text>;
  /**
   * Text for the subtitle.
   */
  subtitle?: React.ReactNode;
  /**
   * Style for the subtitle.
   */
  subtitleStyle?: StyleProp<TextStyle>;
  /**
   * Function to execute on press.
   */
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

const AppbarContent: FC<Props> = ({
  color: titleColor = white,
  subtitle,
  subtitleStyle,
  onPress,
  style,
  titleRef,
  titleStyle,
  title,
  ...rest
}) => {
  const { fonts } = useTheme();

  const subtitleColor = color(titleColor).alpha(0.7).rgb().string();

  return (
    <TouchableWithoutFeedback onPress={onPress} disabled={!onPress}>
      <View style={[styles.container, style]} {...rest}>
        <Text
          ref={titleRef}
          style={[
            {
              color: titleColor,
              ...(Platform.OS === 'ios' ? fonts.regular : fonts.medium),
            },
            styles.title,
            titleStyle,
          ]}
          numberOfLines={1}
          accessible
          accessibilityTraits="header"
          // @ts-expect-error React Native doesn't accept 'heading' as it's web-only
          accessibilityRole={Platform.OS === 'web' ? 'heading' : 'header'}
        >
          {title}
        </Text>
        {subtitle ? (
          <Text
            style={[styles.subtitle, { color: subtitleColor }, subtitleStyle]}
            numberOfLines={1}
          >
            {subtitle}
          </Text>
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

AppbarContent.displayName = 'Appbar.Content';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
  subtitle: {
    fontSize: Platform.OS === 'ios' ? 11 : 14,
  },
  title: {
    fontSize: Platform.OS === 'ios' ? 17 : 20,
  },
});

export default AppbarContent;
