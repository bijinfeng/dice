import CheckboxComponent from './Checkbox';
import CheckboxItem from './CheckboxItem';
import CheckboxAndroid from './CheckboxAndroid';
import CheckboxIOS from './CheckboxIOS';

type CheckboxType = typeof CheckboxComponent;

interface CheckboxProps extends CheckboxType {
  Item: typeof CheckboxItem;
  Android: typeof CheckboxAndroid;
  IOS: typeof CheckboxIOS;
}

const Checkbox = CheckboxComponent as CheckboxProps;

Checkbox.Item = CheckboxItem;
Checkbox.Android = CheckboxAndroid;
Checkbox.IOS = CheckboxIOS;

export default Checkbox;
