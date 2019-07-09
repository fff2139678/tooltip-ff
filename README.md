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
| content  | 气泡展示内容                                                                          | `string|ReactNode|() => ReactNode` | 无      |

## npm address

[npm tooltip-ff](https://www.npmjs.com/package/tooltip-ff)
