import LayoutRow from './Row';
import LayoutCol from './Col';

export interface LayoutProps {
  Row: typeof LayoutRow;
  Col: typeof LayoutCol;
}

export const Layout: LayoutProps = { Row: LayoutRow, Col: LayoutCol };

export default Layout;
