import Grid from './Grid';
import GridItem from './GridItem';

const GridNamespace = Object.assign(Grid, { Item: GridItem });
export default GridNamespace;
export { GridNamespace as Grid, GridItem };
export type { GridProps, GridItemProps, GridDirection } from './type';
