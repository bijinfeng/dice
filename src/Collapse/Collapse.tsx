import isEqual from "lodash-es/isEqual";
import isUndefined from "lodash-es/isUndefined";
import React, { useRef } from "react";
import type { View } from "react-native";
import Cell from "../Cell";
import { useRefState, useUpdateEffect } from "../hooks";
import type { CollapseProps } from "./type";

const Collapse = React.forwardRef<View, CollapseProps>((props, ref) => {
  const { border = true, style, accordion, initExpanded } = props;
  const innerEffect = useRef(false);

  const getInit = (initialValue: CollapseProps["value"]) => {
    const _init = initialValue ?? initExpanded;
    return isUndefined(_init) ? [] : Array.isArray(_init) ? _init : [_init];
  };

  const [expandNames, setExpandNames, expandNamesRef] = useRefState<
    Array<string | number>
  >(() => getInit(props.value));

  const updateName = (name: Array<number | string>) => {
    innerEffect.current = true;
    setExpandNames(name);
    props.onChange?.(accordion ? name[0] : name);
  };

  const toggle = (name: number | string) => {
    if (accordion) {
      updateName(expandNamesRef.current.includes(name) ? [] : [name]);
    } else if (expandNamesRef.current.includes(name)) {
      updateName(
        expandNamesRef.current.filter((activeName) => activeName !== name)
      );
    } else {
      updateName(expandNamesRef.current.concat(name));
    }
  };

  useUpdateEffect(() => {
    if (innerEffect.current) {
      innerEffect.current = false;
      return;
    }
    const newExpandNames = getInit(props.value);
    if (isEqual(newExpandNames, expandNamesRef.current)) return;

    setExpandNames(newExpandNames);
  }, [props.value]);

  return (
    <Cell.Group ref={ref} border={border} style={style}>
      {React.Children.toArray(props.children)
        .filter(React.isValidElement)
        .map((child: React.ReactElement, index: number) => {
          const name = child.props.name ?? index;

          return React.cloneElement(child, {
            expanded: expandNames.includes(name),
            onExpand: () => toggle(name),
          });
        })}
    </Cell.Group>
  );
});

export default Collapse;
