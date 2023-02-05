import IndexAnchor from "./IndexAnchor";
import _IndexBar from "./IndexBar";

const IndexBar = Object.assign(_IndexBar, { Anchor: IndexAnchor });

export default IndexBar;
export type {
  IndexAnchorProps,
  IndexBarInstance,
  IndexBarProps,
} from "./types";
export { IndexBar, IndexAnchor };
