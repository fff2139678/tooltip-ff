import React from 'react';
import ReactDOM from 'react-dom';
import {Fragment} from 'react';

import ToolTip from './';
// import ToolTip from 'tooltip-ff';

const parentStyle = {
  display: 'flex',
  width: '100%',
};

const boxStyle = {
  display: 'flex',
  width: '35%',
  margin: '40px',
  padding: '40px',
  justifyContent: 'space-around',
  flexDirection: 'column',
  overflow: 'auto',
  border: '1px solid #ccc',
};

const liStyle = {
  lineHeight: '40px',
  background: '#f1f1f1',
  marginBottom: '20px',
};

const rowAroundStyle = {
  display: 'flex',
  margin: '40px',
  justifyContent: 'space-around',
  borderRadius: '5px',
};

const contentStyle = {
  fontSize: '40px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const rowBetweenStyle = {
  display: 'flex',
  margin: '40px',
  justifyContent: 'space-between',
};

const content = (
  <ul>
    <li>测试</li>
    <li>测试</li>
    <li>测试</li>
    <li>测试</li>
    <li>测试</li>
    <li>测试</li>
    <li>测试</li>
  </ul>
);

ReactDOM.render (
  <div style={parentStyle}>
    <div style={boxStyle}>
      <h1>12种气泡展示位置:</h1>
      <br />
      <div style={rowAroundStyle}>
        <ToolTip position={'tl'} content={'测试'} trigger={'click'}>
          <div style={contentStyle}>
            {'TL'}
          </div>
        </ToolTip>
        <ToolTip position={'top'} content={''}>
          <div style={contentStyle}>
            {'TOP'}
          </div>
        </ToolTip>
        <ToolTip
          position={'tr'}
          content={'测试'}
          click={() => {
            alert ('click回调！');
          }}
        >
          <div style={contentStyle}>
            {'TR'}
          </div>
        </ToolTip>
      </div>
      <div style={rowBetweenStyle}>
        <ToolTip
          position={'rt'}
          content={'测试'}
          mouseEnter={() => {
            alert ('移入回调！');
          }}
        >
          <div style={contentStyle}>
            {'RT'}
          </div>
        </ToolTip>
        <ToolTip
          position={'lt'}
          content={'测试'}
          mouseLeave={() => {
            alert ('移出回调！');
          }}
        >
          <div style={contentStyle}>
            {'LT'}
          </div>
        </ToolTip>
      </div>
      <div style={rowBetweenStyle}>
        <ToolTip position={'right'} content={content}>
          <div style={contentStyle}>
            {'RIGHT'}
          </div>
        </ToolTip>
        <ToolTip position={'left'} content={'测试'} defaultVisible={true}>
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
    </div>
    <div style={boxStyle}>
      <ol>
        <li style={liStyle}>
          <h1>TL:是点击触发气泡展现</h1>
          <div>
            {`<ToolTip position={'tl'} content={'测试'} trigger={'click'}>
          <div style={contentStyle}>
            {'TL'}
          </div>
        </ToolTip>`}
          </div>
        </li>
        <li style={liStyle}>
          <h1>TOP:是content为空的情况</h1>
          <div>
            {`<ToolTip position={'top'} content={''}>
          <div style={contentStyle}>
            {'TOP'}
          </div>
        </ToolTip>`}
          </div>
        </li>
        <li style={liStyle}>
          <h1>TR:是点击回调展现</h1>
          <div>
            {`<ToolTip
          position={'tr'}
          content={'测试'}
          click={() => {
            alert ('click回调！');
          }}
        >
          <div style={contentStyle}>
            {'TR'}
          </div>
        </ToolTip>`}
          </div>
        </li>
        <li style={liStyle}>
          <h1>RT:是移入回调展现</h1>
          <div>
            {`<ToolTip
          position={'rt'}
          content={'测试'}
          mouseEnter={() => {
            alert ('移入回调！');
          }}
        >
          <div style={contentStyle}>
            {'RT'}
          </div>
        </ToolTip>`}
          </div>
        </li>
        <li style={liStyle}>
          <h1>LT:是移出回调展现</h1>
          <div>
            {`<ToolTip
          position={'lt'}
          content={'测试'}
          mouseLeave={() => {
            alert ('移出回调！');
          }}
        >
          <div style={contentStyle}>
            {'LT'}
          </div>
        </ToolTip>`}
          </div>
        </li>
        <li style={liStyle}>
          <h1>RIGHT:是content为列表时的情况</h1>
          <div>
            {`<ToolTip position={'right'} content={content}>
          <div style={contentStyle}>
            {'RIGHT'}
          </div>
        </ToolTip>`}
          </div>
        </li>
        <li style={liStyle}>
          <h1>LEFT:是默认气泡展现的情况</h1>
          <div>
            {`<ToolTip position={'left'} content={'测试'} defaultVisible={true}>
          <div style={contentStyle}>
            {'LEFT'}
          </div>
        </ToolTip>`}
          </div>
        </li>
      </ol>
    </div>
  </div>,
  document.getElementById ('app')
);
