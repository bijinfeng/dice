import LayoutRow from './Row';
import LayoutCol from './Col';

interface LayoutProps {
  Row: typeof LayoutRow;
  Col: typeof LayoutCol;
}

const Layout: LayoutProps = { Row: LayoutRow, Col: LayoutCol };

export default Layout;
