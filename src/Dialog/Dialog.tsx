import noop from "lodash-es/noop";
import React from "react";
import { Text, View } from "react-native";
import { ActionBar } from "../ActionBar";
import Button from "../Button";
import PopupDialog from "../Popup/Dialog";
import { useThemeFactory } from "../Theme";
import createStyle from "./style";
import type { DialogProps } from "./type";

const Dialog = (props: DialogProps): JSX.Element => {
  const {
    width,
    title,
    theme,
    visible,
    message,
    messageAlign = "center",
    ...others
  } = props;
  const { styles } = useThemeFactory(createStyle);

  const renderTitle = () => {
    if (props.title) {
      return (
        <Text
          style={[
            styles.header,
            !props.message && !props.children && styles.headerIsolated,
          ]}
        >
          {title}
        </Text>
      );
    }
    return null;
  };

  const renderContent = () => {
    if (props.children) {
      return <View>{props.children}</View>;
    }
    if (message) {
      return (
        <View style={!title && styles.contentIsolated}>
          <Text
            style={[
              styles.message,
              !!title && styles.messageHasTitle,
              { textAlign: messageAlign },
            ]}
          >
            {message}
          </Text>
        </View>
      );
    }

    return null;
  };

  const renderButtons = () => (
    <View style={[styles.footer, styles.borderTop]}>
      {props.showCancelButton && (
        <Button
          size="large"
          loading={props.cancelProps?.loading}
          disabled={props.cancelProps?.disabled}
          onPress={props.cancelProps?.loading ? noop : props.onCancel}
          style={styles.cancel}
          textStyle={
            props.cancelButtonColor ? { color: props.cancelButtonColor } : {}
          }
        >
          {props.cancelButtonText || "取消"}
        </Button>
      )}
      {props.showConfirmButton && (
        <Button
          size="large"
          round={theme === "round-button"}
          loading={props.confirmProps?.loading}
          disabled={props.confirmProps?.disabled}
          onPress={props.confirmProps?.loading ? noop : props.onConfirm}
          style={[styles.confirm, props.showCancelButton && styles.borderLeft]}
          textStyle={[
            styles.confirmText,
            !!props.confirmButtonColor && { color: props.confirmButtonColor },
          ]}
        >
          {props.confirmButtonText || "确定"}
        </Button>
      )}
    </View>
  );

  const renderRoundButtons = () => (
    <ActionBar style={[styles.footer, styles.roundBarFooter]}>
      {props.showCancelButton && (
        <ActionBar.Button
          type="warning"
          text={props.cancelButtonText || "取消"}
          loading={props.cancelProps?.loading}
          disabled={props.cancelProps?.disabled}
          onPress={props.cancelProps?.loading ? noop : props.onCancel}
          style={[styles.cancel, styles.roundBarCancel]}
          textStyle={
            props.cancelButtonColor ? { color: props.cancelButtonColor } : {}
          }
        />
      )}
      {props.showConfirmButton && (
        <ActionBar.Button
          type="danger"
          text={props.confirmButtonText || "确定"}
          loading={props.confirmProps?.loading}
          disabled={props.confirmProps?.disabled}
          onPress={props.confirmProps?.loading ? noop : props.onConfirm}
          style={[styles.confirm, styles.roundBarConfirm]}
          textStyle={[
            styles.confirmText,
            styles.roundBarConfirmText,
            !!props.confirmButtonColor && { color: props.confirmButtonColor },
          ]}
        />
      )}
    </ActionBar>
  );

  const renderFooter = () => {
    if (props.footer) return props.footer;
    return props.theme === "round-button"
      ? renderRoundButtons()
      : renderButtons();
  };

  return (
    <PopupDialog {...others} visible={visible} position="center">
      <View style={[styles.container, width ? { width } : {}]}>
        {renderTitle()}
        {renderContent()}
        {renderFooter()}
      </View>
    </PopupDialog>
  );
};

export default Dialog;
