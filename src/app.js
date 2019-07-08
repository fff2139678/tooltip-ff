import React from 'react';
import ReactDOM from 'react-dom';
import {Fragment} from 'react';

import ToolTip from './components/tooltip';

const suggestions = ['C', 'C++', 'Python', 'Java', 'Javascript', 'PHP'];
const handleSelect = selection => alert (`You selected ${selection}`);

ReactDOM.render (
  <ToolTip position={'right'} content={'测试'}>
    {'我是测试按钮'}
  </ToolTip>,
  document.getElementById ('app')
);
