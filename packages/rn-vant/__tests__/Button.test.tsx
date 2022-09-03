import * as React from 'react';
import renderer from 'react-test-renderer';
import { Button } from 'rn-vant';

it('test snapshot', () => {
  const component = renderer.create(<Button>default button</Button>);

  expect(component.toJSON()).toMatchSnapshot();
});
