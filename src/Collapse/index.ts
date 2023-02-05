import _Collapse from "./Collapse";
import CollapseItem from "./CollapseItem";

const Collapse = Object.assign(_Collapse, { Item: CollapseItem });
export default Collapse;
export type { CollapseItemProps, CollapseProps } from "./type";
export { Collapse, CollapseItem };
