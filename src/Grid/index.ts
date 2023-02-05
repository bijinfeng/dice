import Grid from "./Grid";
import GridItem from "./GridItem";

const GridNamespace = Object.assign(Grid, { Item: GridItem });
export default GridNamespace;
export type { GridDirection, GridItemProps, GridProps } from "./type";
export { GridNamespace as Grid, GridItem };
