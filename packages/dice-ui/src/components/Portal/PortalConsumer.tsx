import * as React from 'react';
import type { PortalMethods } from './PortalHost';

type Props = {
  manager: PortalMethods;
  children: React.ReactNode;
};

export default class PortalConsumer extends React.Component<Props> {
  private key: any;

  async componentDidMount() {
    this.checkManager();

    // Delay updating to prevent React from going to infinite loop
    await Promise.resolve();

    this.key = this.props.manager.mount(this.props.children);
  }

  componentDidUpdate() {
    this.checkManager();

    this.props.manager.update(this.key, this.props.children);
  }

  componentWillUnmount() {
    this.checkManager();

    this.props.manager.unmount(this.key);
  }

  private checkManager() {
    if (!this.props.manager) {
      throw new Error('没有在更组件上包裹Provider组件');
    }
  }

  render() {
    return null;
  }
}
