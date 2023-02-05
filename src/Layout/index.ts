import LayoutCol from "./Col";
import LayoutRow from "./Row";

export interface LayoutProps {
  Row: typeof LayoutRow;
  Col: typeof LayoutCol;
}

export const Layout: LayoutProps = { Row: LayoutRow, Col: LayoutCol };

export default Layout;
