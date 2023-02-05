import React, {
  forwardRef,
  useContext,
  useImperativeHandle,
  useRef,
} from "react";
import { Text, View } from "react-native";
import ConfigProvider from "../ConfigProvider/ConfigProviderContext";
import Field, { FieldInstance } from "../Field";
import { useControllableValue } from "../hooks";
import { Search as SearchIco } from "../Icon";
import type { KeyPressEvent } from "../Input/type";
import { useThemeFactory } from "../Theme";
import TouchableOpacity from "../TouchableOpacity";
import { createStyle } from "./style";
import type { SearchInstance, SearchProps } from "./types";

const Search = forwardRef<SearchInstance, SearchProps>((props, ref) => {
  const {
    background,
    shape = "square",
    leftIcon = <SearchIco />,
    label,
    action,
    showAction,
    actionText,
    onSearch,
    onCancel,
    ...rest
  } = props;

  const [value, setValue] = useControllableValue<string>(props);
  const { locale } = useContext(ConfigProvider);
  const { styles, theme } = useThemeFactory(createStyle);
  const filedRef = useRef<FieldInstance>(null);

  const blur = () => {
    filedRef.current?.blur();
  };

  const focus = () => {
    filedRef.current?.focus();
  };

  useImperativeHandle(ref, () => ({
    focus,
    blur,
  }));

  const onKeyPress = (e: KeyPressEvent) => {
    if (e.nativeEvent.key === "Enter") {
      onSearch?.(value);
    }
    rest.onKeyPress?.(e);
  };

  const renderAction = () => {
    if (action) return action;
    if (showAction) {
      return (
        <TouchableOpacity
          activeBackgroundColor={theme.active_color}
          style={styles.action}
          onPress={onCancel}
        >
          <Text style={styles.actionText}>{actionText || locale.cancel}</Text>
        </TouchableOpacity>
      );
    }

    return null;
  };

  const renderLeftIcon = () => {
    if (React.isValidElement(leftIcon)) {
      return React.cloneElement<{ color: string }>(leftIcon as any, {
        color: theme.search_left_icon_color,
      });
    }
    return leftIcon;
  };

  return (
    <View
      style={[
        styles.container,
        !!background && { backgroundColor: background },
        showAction && styles.showAction,
      ]}
    >
      <View style={[styles.content, shape === "round" && styles.round]}>
        {label && <Text style={styles.label}>{label}</Text>}
        <Field
          {...rest}
          ref={filedRef}
          type="search"
          rows={1}
          leftIcon={renderLeftIcon()}
          value={value || ""}
          style={styles.field}
          onChange={setValue}
          onKeyPress={onKeyPress}
        />
      </View>
      {renderAction()}
    </View>
  );
});

export default Search;
