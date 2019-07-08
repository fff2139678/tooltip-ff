import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class ToolTip extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      position: this.props.position || 'right',
      content: this.props.content,
    };
  }

  render () {
    return (
      <span className={`x-tooltip ${this.props.className}`}>
        <span className="top">{this.props.children}</span>
        <span className={`box box-${this.props.position}`}>
          {this.state.content}
        </span>
      </span>
    );
  }
}

ToolTip.propTypes = {
  position: PropTypes.oneOf (['top', 'left', 'right', 'bottom']),
};

ToolTip.defaultProps = {
  position: 'right',
};

export default ToolTip;
