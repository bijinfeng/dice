import CellComponent from './Cell';
import CellGroup from './CellGroup';

type CellType = typeof CellComponent;

interface CellInterface extends CellType {
  Group: typeof CellGroup;
}

const Cell = CellComponent as CellInterface;

Cell.Group = CellGroup;

export default Cell;
