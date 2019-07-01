import React from 'react';
import ReactDOM from 'react-dom';
import {Fragment} from 'react';

import ToolTip from './components/tooltip';
import XToolTip from 'tooltip-ff';

const contentStyle = {
  fontSize: '40px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const rowAroundStyle = {
  display: 'flex',
  margin: '40px',
  justifyContent: 'space-around',
};
const rowBetweenStyle = {
  display: 'flex',
  margin: '40px',
  justifyContent: 'space-between',
};

const content = (
  <ul>
    <li>{'TL'}</li>
    <li>{'TL'}</li>
    <li>{'TL'}</li>
    <li>{'TL'}</li>
    <li>{'TL'}</li>
    <li>{'TL'}</li>
    <li>{'TL'}</li>
    <li>{'TL'}</li>
  </ul>
);

ReactDOM.render (
  <Fragment>
    <div style={rowAroundStyle}>
      <ToolTip
        position={'tl'}
        content={content}
        defaultVisible={true}
        trigger={'click'}
      >
        <div style={contentStyle}>
          {'TL'}
        </div>
      </ToolTip>
      <ToolTip position={'top'} content={''}>
        <div style={contentStyle}>
          {'TOP'}
        </div>
      </ToolTip>
      <ToolTip position={'tr'} content={'测试'}>
        <div style={contentStyle}>
          {'TR'}
        </div>
      </ToolTip>
    </div>
    <div style={rowBetweenStyle}>
      <ToolTip position={'rt'} content={'测试'}>
        <div style={contentStyle}>
          {'RT'}
        </div>
      </ToolTip>
      <ToolTip position={'lt'} content={'测试'}>
        <div style={contentStyle}>
          {'LT'}
        </div>
      </ToolTip>
    </div>
    <div style={rowBetweenStyle}>
      <ToolTip position={'right'} content={'测试'}>
        <div style={contentStyle}>
          {'Right'}
        </div>
      </ToolTip>
      <ToolTip position={'left'} content={'测试'}>
        <div style={contentStyle}>
          {'LEFT'}
        </div>
      </ToolTip>
    </div>
    <div style={rowBetweenStyle}>
      <ToolTip position={'rb'} content={'测试'}>
        <div style={contentStyle}>
          {'RB'}
        </div>
      </ToolTip>
      <ToolTip position={'lb'} content={'测试'}>
        <div style={contentStyle}>
          {'LB'}
        </div>
      </ToolTip>
    </div>
    <div style={rowAroundStyle}>
      <ToolTip position={'bl'} content={'测试'}>
        <div style={contentStyle}>
          {'BL'}
        </div>
      </ToolTip>
      <ToolTip position={'bottom'} content={'测试'}>
        <div style={contentStyle}>
          {'BOTTOM'}
        </div>
      </ToolTip>
      <ToolTip position={'br'} content={'测试'}>
        <div style={contentStyle}>
          {'BR'}
        </div>
      </ToolTip>
    </div>
  </Fragment>,
  document.getElementById ('app')
);
