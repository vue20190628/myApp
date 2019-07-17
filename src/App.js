import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
// 引入路由配置
import RouterCompontent from "./router"
import { Provider } from 'react-redux'
import store from './store'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterCompontent />
      </div>
    </Provider>
  );
}

export default App;
