import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import WidgetContainer from './containers/WidgetContainer';
import {Col} from "react-bootstrap";

@WidgetContainer
export default class Widget extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
  };

  shouldComponentUpdate = shallowCompare;

  render() {
    return (
      <Col className={`rule--widget rule--widget--${this.props.name.toUpperCase()}`}>{this.props.children}</Col>
    );
  }
}
