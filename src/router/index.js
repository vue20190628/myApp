import React from 'react';
import CityComponent from '../common/city'
import cityDetail from '../common/cityDetail'
import Component404 from '../common/404'
import { Route, BrowserRouter, Switch, Redirect, NavLink } from 'react-router-dom'

function RouterCompontent() {
  return (
    <BrowserRouter>
      <div>
        <NavLink exact activeClassName="selected" to="/city">city</NavLink>---
        <NavLink exact activeClassName="selected" to="/city/100">cityDetail</NavLink>
        {/* <NavLink exact activeClassName="selected" to="/cityList">城市列表</NavLink> */}
      </div>

      <Switch>
        {/* <Redirect exact from="/" to="/city" /> */}
        {/* 根路径默认匹配所有  exact精确匹配 Switch只会渲染一个路由 :id动态路由，代表id是个变量名*/}
        <Route exact path="/city" component={CityComponent} />
        <Route path="/city/:id" component={cityDetail} />
        {/* <Route path="/cityList" component={cityList} /> */}
        <Route component={Component404} />
      </Switch>
    </BrowserRouter>
  )
}
export default RouterCompontent;