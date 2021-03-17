import { logger } from 'csssr-school-utils/src';

export default function logRender(Component) {
  return class extends Component {
    shouldComponentUpdate = (nextProps, nextState) => {
      logger.call(Component, Component.prototype.constructor.name, nextProps, nextState);

      console.log('props: ', nextProps);

      if (nextState) {
        console.log('state: ', nextState);
      }

      return true;
    }

    render() {
      return super.render()
    }

  }
}
