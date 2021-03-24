import { logger } from 'csssr-school-utils/src';
import shallowCompare from 'react-addons-shallow-compare';

export default function logRender(Component) {
  return class extends Component {
    shouldComponentUpdate = (nextProps, nextState) => {
      if (shallowCompare(this, nextProps, nextState)) {
        logger.call(Component, super.constructor.name, nextProps, nextState);
        console.log('props: ', nextProps);

        if (nextState) {
          console.log('state: ', nextState);
        }

        return true;
      } else {
        return false;
      }

    }

    render() {
      return super.render()
    }

  }
}
