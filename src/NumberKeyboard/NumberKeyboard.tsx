import React, { useMemo } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useControllableValue, useLazyRender } from "../hooks";
import { Portal } from "../Portal";
import { useThemeFactory } from "../Theme";
import TouchableOpacity from "../TouchableOpacity";
import NumberKeyboardKey from "./NumberKeyboardKey";
import SlideAnimatable from "./SlideAnimatable";
import { createStyle } from "./style";
import type {
  KeyConfig,
  NumberKeyboardKeyProps,
  NumberKeyboardProps,
} from "./types";

const NumberKeyboard: React.FC<NumberKeyboardProps> = (props) => {
  const {
    visible = false,
    title,
    transition = true,
    blurOnClose = true,
    showDeleteKey = true,
    hideOnClickOutside = true,
    safeAreaInsetBottom = true,
    theme = "default",
    extraKey,
    maxlength = Number.MAX_VALUE,
    randomKeyOrder,
    deleteButtonText,
    numberKeyRender,
    deleteRender,
    extraKeyRender,
    closeButtonText,
    closeButtonLoading,
    onDelete,
    onInput,
  } = props;

  const [value = "", onChange] = useControllableValue<string>(props);
  const { styles, theme: themeGlobal } = useThemeFactory(createStyle);
  const lazyRender = useLazyRender(visible);
  const safeAreaInsets = useSafeAreaInsets();

  const genBasicKeys = () => {
    const keys: KeyConfig[] = Array(9)
      .fill("")
      .map((_, i) => ({ text: i + 1 }));

    if (randomKeyOrder) {
      keys.sort(() => (Math.random() > 0.5 ? 1 : -1));
    }
    return keys;
  };

  const genDefaultKeys = (): KeyConfig[] => [
    ...genBasicKeys(),
    { text: extraKey as string, type: "extra" },
    { text: 0 },
    {
      text: showDeleteKey ? deleteButtonText : "",
      type: showDeleteKey ? "delete" : "",
    },
  ];

  const genCustomKeys = () => {
    const keys = genBasicKeys();
    const extraKeys = Array.isArray(extraKey) ? extraKey : [extraKey];
    if (extraKeys.length === 1) {
      keys.push(
        { text: 0, wider: true },
        { text: extraKeys[0], type: "extra" }
      );
    } else if (extraKeys.length === 2) {
      keys.push(
        { text: extraKeys[0], type: "extra" },
        { text: 0 },
        { text: extraKeys[1], type: "extra" }
      );
    }

    return keys;
  };

  const keys = useMemo(
    () => (theme === "custom" ? genCustomKeys() : genDefaultKeys()),
    [theme]
  );

  const onBlur = () => {
    if (visible) {
      props.onBlur?.();
    }
  };

  const onClose = () => {
    props.onClose?.();
    if (blurOnClose) {
      onBlur();
    }
  };

  const onPress: NumberKeyboardKeyProps["onPress"] = (text, type) => {
    if (text === "" || text === undefined) {
      if (type === "extra") {
        onBlur();
      }
      return;
    }

    if (type === "delete") {
      onDelete?.();
      onChange(value.slice(0, value.length - 1));
    } else if (type === "close") {
      onClose();
    } else if (value.length < maxlength) {
      onInput?.(text?.toString());
      onChange(value + text);
    }
  };

  const renderTitle = () => {
    const showClose = closeButtonText && theme === "default";
    const showTitle = title || showClose;

    if (!showTitle) {
      return null;
    }

    return (
      <View style={styles.header}>
        {title && <Text style={styles.title}>{title}</Text>}
        {showClose && (
          <TouchableOpacity
            style={styles.close}
            activeOpacity={themeGlobal.active_opacity}
            onPress={onClose}
          >
            <Text style={styles.closeText}>{closeButtonText}</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const renderKeys = () => {
    return keys.map((key, i) => {
      let keySlots = null;

      if (!key.type && numberKeyRender) {
        keySlots = numberKeyRender(key);
      } else if (key.type === "delete" && deleteRender) {
        keySlots = deleteRender();
      } else if (key.type === "extra" && extraKeyRender) {
        keySlots = extraKeyRender();
      }

      return (
        <NumberKeyboardKey
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          text={key.text}
          type={key.type}
          wider={key.wider}
          onPress={onPress}
        >
          {keySlots}
        </NumberKeyboardKey>
      );
    });
  };

  const renderSidebar = () => {
    if (theme === "custom") {
      return (
        <View style={styles.sideBar}>
          {showDeleteKey && (
            <NumberKeyboardKey
              large
              text={deleteButtonText}
              type="delete"
              onPress={onPress}
            />
          )}
          <NumberKeyboardKey
            large
            text={closeButtonText}
            type="close"
            color="blue"
            loading={closeButtonLoading}
            onPress={onPress}
          />
        </View>
      );
    }
    return null;
  };

  const Title = renderTitle();

  const renderContent = lazyRender(() => (
    <Portal>
      {hideOnClickOutside && visible && (
        <Pressable style={StyleSheet.absoluteFillObject} onPress={onBlur} />
      )}

      <SlideAnimatable
        style={[
          styles.wrapper,
          !!Title && styles.widthTitle,
          {
            paddingBottom: safeAreaInsetBottom
              ? safeAreaInsets.bottom + 22
              : 22,
          },
        ]}
        visible={visible}
        duration={transition ? 300 : 0}
      >
        {Title}
        <View style={styles.body}>
          <View style={styles.keys}>{renderKeys()}</View>
          {renderSidebar()}
        </View>
      </SlideAnimatable>
    </Portal>
  ));

  return <>{renderContent()}</>;
};

export default NumberKeyboard;
