import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const defaultArray = [
  'top',
  'tl',
  'tr',
  'left',
  'lt',
  'lb',
  'right',
  'rt',
  'rb',
  'bottom',
  'bl',
  'br',
];

class ToolTip extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      position: defaultArray.includes (this.props.position)
        ? this.props.position
        : 'right',
      content: this.props.content,
    };
  }

  render () {
    return (
      <span
        className={`tooltip-ff tooltip-ff-${this.state.position} ${this.props.className}`}
      >
        <span className="content">{this.props.children}</span>
        <span className={`box box-${this.state.position}`}>
          {this.state.content}
        </span>
      </span>
    );
  }
}

ToolTip.propTypes = {
  position: PropTypes.oneOf ([
    'top',
    'tl',
    'tr',
    'left',
    'lt',
    'lb',
    'right',
    'rt',
    'rb',
    'bottom',
    'bl',
    'br',
  ]),
};

ToolTip.defaultProps = {
  position: 'right',
};

export default ToolTip;
