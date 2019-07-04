import React from 'react';
import ReactDOM from 'react-dom';
import {Fragment} from 'react';

import ToolTip from './tooltip';

const suggestions = ['C', 'C++', 'Python', 'Java', 'Javascript', 'PHP'];
const handleSelect = selection => alert (`You selected ${selection}`);

ReactDOM.render (
  <Fragment>
    <ToolTip position={'right'} content={'测试'}>
      {'我是测试按钮'}
    </ToolTip>
  </Fragment>,
  document.getElementById ('app')
);
