import color from 'color';
import * as React from 'react';
import {
  View,
  ViewStyle,
  StyleSheet,
  StyleProp,
  TextStyle,
  GestureResponderEvent,
} from 'react-native';
import TouchableRipple from '../TouchableRipple';
import Icon from '../Icon';
import Text from '../Text';
import { useTheme } from '../Theme';

import { ListAccordionGroupContext } from './ListAccordionGroup';

type Props = {
  /**
   * Title text for the list accordion.
   */
  title: React.ReactNode;
  /**
   * Description text for the list accordion.
   */
  description?: React.ReactNode;
  /**
   * Callback which returns a React element to display on the left side.
   */
  left?: (props: { color: string }) => React.ReactNode;
  /**
   * Callback which returns a React element to display on the right side.
   */
  right?: (props: { isExpanded: boolean }) => React.ReactNode;
  /**
   * Whether the accordion is expanded
   * If this prop is provided, the accordion will behave as a "controlled component".
   * You'll need to update this prop when you want to toggle the component or on `onPress`.
   */
  expanded?: boolean;
  /**
   * Function to execute on press.
   */
  onPress?: () => void;
  /**
   * Function to execute on long press.
   */
  onLongPress?: (e: GestureResponderEvent) => void;
  /**
   * Content of the section.
   */
  children: React.ReactNode;
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
   * Id is used for distinguishing specific accordion when using List.AccordionGroup. Property is required when using List.AccordionGroup and has no impact on behavior when using standalone List.Accordion.
   */
  id?: string | number;
  /**
   * TestID used for testing purposes
   */
  testID?: string;
  /**
   * Accessibility label for the TouchableRipple. This is read by the screen reader when the user taps the touchable.
   */
  accessibilityLabel?: string;
};

const ListAccordion = ({
  left,
  right,
  title,
  description,
  children,
  titleStyle,
  descriptionStyle,
  titleNumberOfLines = 1,
  descriptionNumberOfLines = 2,
  style,
  id,
  testID,
  onPress,
  onLongPress,
  expanded: expandedProp,
  accessibilityLabel,
}: Props) => {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState<boolean>(expandedProp || false);

  const handlePressAction = () => {
    onPress?.();

    if (expandedProp === undefined) {
      // Only update state of the `expanded` prop was not passed
      // If it was passed, the component will act as a controlled component
      setExpanded(_expanded => !_expanded);
    }
  };

  const titleColor = color(theme.colors.text).alpha(0.87).rgb().string();
  const descriptionColor = color(theme.colors.text).alpha(0.54).rgb().string();

  const expandedInternal = expandedProp !== undefined ? expandedProp : expanded;

  const groupContext = React.useContext(ListAccordionGroupContext);
  if (groupContext !== null && !id) {
    throw new Error(
      'List.Accordion is used inside a List.AccordionGroup without specifying an id prop.'
    );
  }
  const isExpanded = groupContext ? groupContext.expandedId === id : expandedInternal;
  const handlePress =
    groupContext && id !== undefined ? () => groupContext.onAccordionPress(id) : handlePressAction;
  return (
    <View>
      <View style={{ backgroundColor: theme.colors.background }}>
        <TouchableRipple
          style={[styles.container, style]}
          onPress={handlePress}
          onLongPress={onLongPress}
          // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
          accessibilityTraits="button"
          accessibilityComponentType="button"
          accessibilityRole="button"
          accessibilityState={{ expanded: isExpanded }}
          accessibilityLabel={accessibilityLabel}
          testID={testID}
          delayPressIn={0}
          borderless
        >
          <View style={styles.row} pointerEvents="none">
            {left
              ? left({
                  color: isExpanded ? theme.colors.primary : descriptionColor,
                })
              : null}
            <View style={[styles.item, styles.content]}>
              <Text
                selectable={false}
                numberOfLines={titleNumberOfLines}
                style={[
                  styles.title,
                  {
                    color: isExpanded ? theme.colors.primary : titleColor,
                  },
                  titleStyle,
                ]}
              >
                {title}
              </Text>
              {description ? (
                <Text
                  selectable={false}
                  numberOfLines={descriptionNumberOfLines}
                  style={[
                    styles.description,
                    {
                      color: descriptionColor,
                    },
                    descriptionStyle,
                  ]}
                >
                  {description}
                </Text>
              ) : null}
            </View>
            <View style={[styles.item, description ? styles.multiline : undefined]}>
              {right ? (
                right({
                  isExpanded,
                })
              ) : (
                <Icon name={isExpanded ? 'arrow-up' : 'arrow-down'} color={titleColor} size={24} />
              )}
            </View>
          </View>
        </TouchableRipple>
      </View>

      {isExpanded
        ? React.Children.map(children, child => {
            if (left && React.isValidElement(child) && !child.props.left && !child.props.right) {
              return React.cloneElement(child, {
                style: [styles.child, child.props.style],
              });
            }

            return child;
          })
        : null}
    </View>
  );
};

ListAccordion.displayName = 'List.Accordion';

const styles = StyleSheet.create({
  child: {
    paddingLeft: 64,
  },
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
  item: {
    margin: 8,
  },
  multiline: {
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
  },
});

export default ListAccordion;
