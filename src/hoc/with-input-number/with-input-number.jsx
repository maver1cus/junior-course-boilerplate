import React, {Component} from 'react';
import { toInt } from 'csssr-school-utils';

function WithInputNumber(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
      evt.preventDefault();
      const value = toInt(evt.target.value) || 0;
      const nameFilter = evt.target.name;
      this.props.onChange(nameFilter, value);
      evt.target.focus();
    }

    render() {
      const {onChange, value, ...props} = this.props;
      return (
        <WrappedComponent
          {...props}
          onChange={this.handleChange}
          value={this.props.value}
        />
      )
    }
  }
}

export default WithInputNumber;
