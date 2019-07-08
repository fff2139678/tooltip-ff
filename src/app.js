import React from 'react';
import ReactDOM from 'react-dom';
import {Fragment} from 'react';

import ToolTip from './components/tooltip';
import XToolTip from 'tooltip-ff';

ReactDOM.render (
  <Fragment>
    <XToolTip position={'right'} content={'测试'}>
      {'我是测试按钮'}
    </XToolTip>
    <ToolTip position={'right'} content={'测试'}>
      {'我是测试按钮'}
    </ToolTip>
  </Fragment>,
  document.getElementById ('app')
);
