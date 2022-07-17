import CellComponent from './Cell';
import CellGroup from './CellGroup';

export const Cell = Object.assign(CellComponent, { Group: CellGroup });

export default Cell;
