import React from 'react';
import renderer from 'react-test-renderer';

const snapshotTest = (name: string, Component: React.ComponentType) => {
  it(name, () => {
    const component = renderer.create(<Component />);

    expect(component.toJSON()).toMatchSnapshot();
  });
};

export default snapshotTest;
