import AppbarComponent from './Appbar';
import AppbarContent from './AppbarContent';
import AppbarAction from './AppbarAction';
import AppbarBackAction from './AppbarBackAction';
import AppbarHeader from './AppbarHeader';

type AppbarType = typeof AppbarComponent;

interface AppbarInterface extends AppbarType {
  Content: typeof AppbarContent;
  Action: typeof AppbarAction;
  BackAction: typeof AppbarBackAction;
  Header: typeof AppbarHeader;
}

const Appbar = AppbarComponent as AppbarInterface;

Appbar.Content = AppbarContent;
Appbar.Action = AppbarAction;
Appbar.BackAction = AppbarBackAction;
Appbar.Header = AppbarHeader;

export default Appbar;
