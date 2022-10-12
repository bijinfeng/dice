import _IndexBar from './IndexBar';
import IndexAnchor from './IndexAnchor';

const IndexBar = Object.assign(_IndexBar, { Anchor: IndexAnchor });

export default IndexBar;
export { IndexBar, IndexAnchor };
export type { IndexBarProps, IndexBarInstance, IndexAnchorProps } from './types';
