import isEqual from "lodash-es/isEqual";
import React, {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";
import { Text, View } from "react-native";
import ConfigProviderContext from "../ConfigProvider/ConfigProviderContext";
import { useSetState } from "../hooks";
import { useThemeFactory } from "../Theme";
import TouchableOpacity from "../TouchableOpacity";
import { createStyle } from "./style";
import type { PickerFieldNames, PickerProps, State } from "./type";
import { DataType, flateColumns, getDateType, isPlain } from "./utils";
import WheelPicker from "./WheelPicker";

const DEFAULT_PICKER_FIELD_NAMES: Required<PickerFieldNames> = {
  text: "text",
  value: "value",
  children: "children",
};

const Picker = forwardRef<View, PickerProps>((props, ref) => {
  const {
    toolbarPosition = "top",
    showToolbar = true,
    itemHeight = 44,
    visibleItemCount = 5,
    style,
  } = props;
  const {
    text: textKey,
    value: valueKey,
    children: childrenKey,
  } = Object.assign(DEFAULT_PICKER_FIELD_NAMES, props.columnsFieldNames);

  const { styles, theme } = useThemeFactory(createStyle);
  const { locale } = useContext(ConfigProviderContext);
  const dateType = useRef(DataType.SINGLE);
  const [state, updateState, stateRef] = useSetState<State>({
    values: [],
    options: [],
    indexs: [],
    columns: [],
  });

  useEffect(() => {
    const { columns, value = [] } = props;
    dateType.current = getDateType(columns, childrenKey);
    const lastColumns = isPlain(columns) ? [columns] : columns;
    const lastValue = Array.isArray(value) ? value : [value];
    const isColumesChanged = !isEqual(lastColumns, stateRef.current.columns);
    const isValueChanged = !isEqual(lastValue, stateRef.current.values);

    if (isColumesChanged || isValueChanged) {
      updateState(flateColumns(lastColumns, lastValue, valueKey, childrenKey));
    }
  }, [props.columns, props.value]);

  const handleChange = useCallback(
    (index: number, columnIndex: number) => {
      const lastColumns = isPlain(props.columns)
        ? [props.columns]
        : props.columns;
      const { values, columns } = stateRef.current;
      const targetValue = columns[columnIndex][index][valueKey];

      if (dateType.current === DataType.CASCADE) {
        values.splice(columnIndex, values.length - columnIndex, targetValue);
      } else {
        values[columnIndex] = targetValue;
      }

      const newState = flateColumns(lastColumns, values, valueKey, childrenKey);
      if (dateType.current === DataType.SINGLE) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        props.onChange?.(newState.values[0], newState.options[0], index);
      } else {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        props.onChange?.(newState.values, newState.options, index);
      }
      updateState(newState);
    },
    [props.columns, valueKey, childrenKey, props.onChange]
  );

  const handleConfirm = useCallback(() => {
    const { values, options } = stateRef.current;
    if (dateType.current === DataType.SINGLE) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      props.onConfirm?.(values[0], options[0]);
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      props.onConfirm?.(values, options);
    }
  }, [props.onConfirm]);

  const handleCacel = useCallback(() => {
    const { values, options } = stateRef.current;
    if (dateType.current === DataType.SINGLE) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      props.onCancel?.(values[0], options[0]);
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      props.onCancel?.(values, options);
    }
  }, [props.onCancel]);

  const renderToolbar = () => {
    if (showToolbar) {
      return (
        <View style={styles.toolbar}>
          {props.toolbar || (
            <>
              <TouchableOpacity
                style={styles.button}
                activeOpacity={theme.active_opacity}
                onPress={handleCacel}
              >
                <Text style={[styles.buttonText, styles.cancelButton]}>
                  {props.cancelButtonText || locale.cancel}
                </Text>
              </TouchableOpacity>
              {props.title && <Text style={styles.title}>{props.title}</Text>}
              <TouchableOpacity
                style={styles.button}
                activeOpacity={theme.active_opacity}
                onPress={handleConfirm}
              >
                <Text style={[styles.buttonText, styles.confirmButton]}>
                  {props.confirmButtonText || locale.confirm}
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      );
    }

    return null;
  };

  const renderColumns = () => {
    const wrapHeight = (visibleItemCount + 1) * itemHeight;
    const maskHeight = (wrapHeight - itemHeight) / 2;

    return (
      <View style={[styles.columns, { height: wrapHeight }]}>
        {state.columns.map((item, index) => (
          <WheelPicker
            // eslint-disable-next-line react/no-array-index-key
            key={`picker-${index}`}
            index={state.indexs[index]}
            options={item}
            itemHeight={itemHeight}
            wrapHeight={wrapHeight}
            textKey={textKey}
            onChange={(idx) => handleChange(idx, index)}
          />
        ))}
        <LinearGradient
          colors={theme.picker_mask_top_color}
          style={[styles.maskTop, { height: maskHeight }]}
          pointerEvents="none"
        />
        <LinearGradient
          colors={theme.picker_mask_bottom_color}
          style={[styles.maskBottom, { height: maskHeight }]}
          pointerEvents="none"
        />
      </View>
    );
  };

  return (
    <View style={[styles.picker, style]} ref={ref}>
      {toolbarPosition === "top" && renderToolbar()}
      {props.columnsTop}
      {renderColumns()}
      {props.columnsBottom}
      {toolbarPosition === "bottom" && renderToolbar()}
    </View>
  );
});

export default Picker;
