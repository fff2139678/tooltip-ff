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
      isVisible: this.props.defaultVisible,
      trigger: this.props.trigger,
    };
  }

  mouseEnter () {
    this.props.mouseEnter && this.props.mouseEnter ();
  }

  mouseLeave () {
    this.setState ({
      isVisible: false,
      isFocus: false,
    });
    this.props.mouseLeave && this.props.mouseLeave ();
  }

  click () {
    this.state.trigger === 'click' &&
      this.setState ({
        isVisible: true,
      });
    this.props.click && this.props.click ();
  }

  render () {
    return (
      <span
        className={`tooltip-ff tooltip-ff-${this.state.position} ${this.props.className}`}
      >
        <span
          className={`content ${this.state.trigger === 'hover' ? 'active' : ''}`}
          onMouseEnter={this.mouseEnter.bind (this)}
          onMouseLeave={this.mouseLeave.bind (this)}
          onClick={this.click.bind (this)}
        >
          {this.props.children}
        </span>
        {this.state.content
          ? <span
              className={`box box-${this.state.position} ${this.state.isVisible ? 'visible' : ''}`}
            >
              {this.state.content}
            </span>
          : null}
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
  defaultVisible: PropTypes.oneOfType ([PropTypes.bool, PropTypes.string]),
  trigger: PropTypes.string,
  mouseEnter: PropTypes.func,
  mouseLeave: PropTypes.func,
  click: PropTypes.func,
};

ToolTip.defaultProps = {
  position: 'right',
  defaultVisible: false,
  trigger: 'hover',
};

export default ToolTip;
