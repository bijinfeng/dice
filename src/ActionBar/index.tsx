import ActionBar from "./ActionBar";
import ActionBarButton from "./ActionBarButton";
import ActionBarIcon from "./ActionBarIcon";

const ActionBarNamespace = Object.assign(ActionBar, {
  Icon: ActionBarIcon,
  Button: ActionBarButton,
});

export default ActionBarNamespace;
export type {
  ActionBarButtonProps,
  ActionBarIconProps,
  ActionBarProps,
} from "./type";
export { ActionBarNamespace as ActionBar };
