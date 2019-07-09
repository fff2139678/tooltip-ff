## Install

```
npm i tooltip-ff
```

## Usage

```
import React from 'react';
import ReactDOM from 'react-dom';

import XToolTip from 'tooltip-ff';

ReactDOM.render (
    <XToolTip position={'right'} content={'测试'}>
      {'我是测试按钮'}
    </XToolTip>,
  document.getElementById ('app')
);

```

## API

| 参数     | 说明                                                                                  | 类型                               | 默认    |
| -------- | ------------------------------------------------------------------------------------- | ---------------------------------- | ------- |
| position | 气泡框位置，可选`top`,`tl`,`tr`,`left`,`lt`,`lb`,`right`,`rt`,`rb`,`bottom`,`bl`,`br` | string                             | `right` |
| content  | 气泡展示内容                                                                          | `string/ReactNode/() => ReactNode` | 无      |
| trigger  | 触发行为，可选`hover`,`click`                                                                         | string | `hover`      |
| defaultVisible  | 默认是否显隐                                                                         | `boolean` | false  |
| mouseEnter  | 显视回调                                                                          | `() => void` | 无  |
| mouseLeave  | 隐藏回调                                                                          | `() => void` | 无  |
| click  | 点击回调                                                                          | `() => void` | 无  |


## npm address
```
npm install

http://localhost:8080/
```

## npm address

[npm tooltip-ff](https://www.npmjs.com/package/tooltip-ff)
