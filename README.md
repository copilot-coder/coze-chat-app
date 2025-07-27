## Overview

本仓库仅用于展示如何用coze chat-sdk接入coze studio的智能体，里面很多信息是hard code的，并非一个完备的应用。

公众号文章：https://mp.weixin.qq.com/s/q3oQd6Tng6hf0uNQTxZ5SQ

## 使用步骤

前提：安装nodejs环境

- checkout代码
```
git clone https://github.com/copilot-coder/coze-chat-app.git
```

- 修改src/App.jsx
  - appId: 改为你的BotId
  - token: 改为你的个人访问令牌

- 安装依赖
```
cd coze-chat-app
npm install
```

- 运行
```
npm run dev
```

- 通过浏览器访问`http://localhost:3000`即可看到前端交互页面