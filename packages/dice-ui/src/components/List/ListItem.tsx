import color from 'color';
import React, { FC } from 'react';
import { StyleProp, StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import TouchableRipple from '../TouchableRipple';
import Text from '../Text';
import { useTheme } from '../Theme';
import type { $RemoveChildren, EllipsizeProp } from '../../types';

type Description =
  | React.ReactNode
  | ((props: {
      selectable: boolean;
      ellipsizeMode: EllipsizeProp | undefined;
      color: string;
      fontSize: number;
    }) => React.ReactNode);

type Props = $RemoveChildren<typeof TouchableRipple> & {
  /**
   * Title text for the list item.
   */
  title: React.ReactNode;
  /**
   * Description text for the list item or callback which returns a React element to display the description.
   */
  description?: Description | null;
  /**
   * Callback which returns a React element to display on the left side.
   */
  left?: (props: {
    color: string;
    style: {
      marginLeft: number;
      marginRight: number;
      marginVertical?: number;
    };
  }) => React.ReactNode;
  /**
   * Callback which returns a React element to display on the right side.
   */
  right?: (props: {
    color: string;
    style?: {
      marginRight: number;
      marginVertical?: number;
    };
  }) => React.ReactNode;
  /**
   * Function to execute on press.
   */
  onPress?: () => void;
  /**
   * Style that is passed to the wrapping TouchableRipple element.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Style that is passed to Title element.
   */
  titleStyle?: StyleProp<TextStyle>;
  /**
   * Style that is passed to Description element.
   */
  descriptionStyle?: StyleProp<TextStyle>;
  /**
   * Truncate Title text such that the total number of lines does not
   * exceed this number.
   */
  titleNumberOfLines?: number;
  /**
   * Truncate Description text such that the total number of lines does not
   * exceed this number.
   */
  descriptionNumberOfLines?: number;
  /**
   * Ellipsize Mode for the Title.  One of `'head'`, `'middle'`, `'tail'`, `'clip'`.
   *
   * See [`ellipsizeMode`](https://reactnative.dev/docs/text#ellipsizemode)
   */
  titleEllipsizeMode?: EllipsizeProp;
  /**
   * Ellipsize Mode for the Description.  One of `'head'`, `'middle'`, `'tail'`, `'clip'`.
   *
   * See [`ellipsizeMode`](https://reactnative.dev/docs/text#ellipsizemode)
   */
  descriptionEllipsizeMode?: EllipsizeProp;
};

const ListItem: FC<Props> = ({
  left,
  right,
  title,
  description,
  onPress,
  style,
  titleStyle,
  titleNumberOfLines = 1,
  descriptionNumberOfLines = 2,
  titleEllipsizeMode,
  descriptionEllipsizeMode,
  descriptionStyle,
  ...rest
}) => {
  const theme = useTheme();
  const renderDescription = (descriptionColor: string, _description?: Description | null) => {
    return typeof _description === 'function' ? (
      _description({
        selectable: false,
        ellipsizeMode: descriptionEllipsizeMode,
        color: descriptionColor,
        fontSize: styles.description.fontSize,
      })
    ) : (
      <Text
        selectable={false}
        numberOfLines={descriptionNumberOfLines}
        ellipsizeMode={descriptionEllipsizeMode}
        style={[styles.description, { color: descriptionColor }, descriptionStyle]}
      >
        {description}
      </Text>
    );
  };

  const titleColor = color(theme.colors.text).alpha(0.87).rgb().string();
  const descriptionColor = color(theme.colors.text).alpha(0.54).rgb().string();

  return (
    <TouchableRipple {...rest} style={[styles.container, style]} onPress={onPress}>
      <View style={styles.row}>
        {left
          ? left({
              color: descriptionColor,
              style: description
                ? styles.iconMarginLeft
                : {
                    ...styles.iconMarginLeft,
                    ...styles.marginVerticalNone,
                  },
            })
          : null}
        <View style={[styles.item, styles.content]}>
          <Text
            selectable={false}
            ellipsizeMode={titleEllipsizeMode}
            numberOfLines={titleNumberOfLines}
            style={[styles.title, { color: titleColor }, titleStyle]}
          >
            {title}
          </Text>
          {description ? renderDescription(descriptionColor, description) : null}
        </View>
        {right
          ? right({
              color: descriptionColor,
              style: description
                ? styles.iconMarginRight
                : {
                    ...styles.iconMarginRight,
                    ...styles.marginVerticalNone,
                  },
            })
          : null}
      </View>
    </TouchableRipple>
  );
};

ListItem.displayName = 'List.Item';

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  description: {
    fontSize: 14,
  },
  iconMarginLeft: { marginLeft: 0, marginRight: 16 },
  iconMarginRight: { marginRight: 0 },
  item: {
    marginVertical: 6,
    paddingLeft: 8,
  },
  marginVerticalNone: { marginVertical: 0 },
  row: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
  },
});

export default ListItem;
