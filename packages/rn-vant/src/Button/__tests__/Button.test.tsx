import * as React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react-native';
// import { Plus } from '@pingtou/rn-vant-icons';
import snapshotTest from '../../tests/shared/snapshotTest';
import { Button } from '../index';

describe('Button', () => {
  snapshotTest('render text button by default', () => <Button>Text Button</Button>);
  snapshotTest('render primary button width type', () => (
    <Button type="primary">Text Button</Button>
  ));
  snapshotTest('render success button width type', () => (
    <Button type="success">Text Button</Button>
  ));
  snapshotTest('render warning button width type', () => (
    <Button type="warning">Text Button</Button>
  ));
  snapshotTest('render danger button width type', () => (
    <Button type="warning">Text Button</Button>
  ));
  snapshotTest('render primary button in plain', () => (
    <Button plain type="warning">
      Text Button
    </Button>
  ));
  snapshotTest('render success button in plain', () => (
    <Button plain type="warning">
      Text Button
    </Button>
  ));
  snapshotTest('render button width loading', () => <Button loading>Text Button</Button>);
  snapshotTest('render button width spinner loading', () => (
    <Button loading type="primary" loadingType="spinner">
      Text Button
    </Button>
  ));
  snapshotTest('render square button', () => (
    <Button square type="primary">
      方形按钮
    </Button>
  ));
  snapshotTest('render round button', () => (
    <Button round type="success">
      圆形按钮
    </Button>
  ));
  // snapshotTest('render button width icon', () => (
  //   <Button icon={<Plus />} type="primary">
  //     按钮
  //   </Button>
  // ));
  snapshotTest('render button width large size', () => (
    <Button type="primary" size="large">
      大号按钮
    </Button>
  ));
  snapshotTest('render button width normal size', () => (
    <Button type="primary" size="normal">
      普通按钮
    </Button>
  ));
  snapshotTest('render button width small size', () => (
    <Button type="primary" size="small">
      小型按钮
    </Button>
  ));
  snapshotTest('render button width mini size', () => (
    <Button type="primary" size="mini">
      迷你按钮
    </Button>
  ));
  snapshotTest('render button width custom color', () => <Button color="#7232dd">单色按钮</Button>);

  it('render button with custom testID', () => {
    const tree = renderer
      .create(<Button testID="custom:testID">Button with custom testID</Button>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should execute onPressIn', () => {
    const onPressInMock = jest.fn();
    const onPress = jest.fn();

    const { getByTestId } = render(
      <Button onPress={onPress} onPressIn={onPressInMock} testID="button" />
    );
    fireEvent(getByTestId('button'), 'onPressIn');
    expect(onPressInMock).toHaveBeenCalledTimes(1);
  });

  it('should execute onPressOut', () => {
    const onPressOutMock = jest.fn();
    const onPress = jest.fn();

    const { getByTestId } = render(
      <Button onPress={onPress} onPressOut={onPressOutMock} testID="button" />
    );
    fireEvent(getByTestId('button'), 'onPressOut');
    expect(onPressOutMock).toHaveBeenCalledTimes(1);
  });
});
