import CellComponent from './Cell';
import CellGroup from './CellGroup';

const Cell = Object.assign(CellComponent, { Group: CellGroup });

export default Cell;
