import React, { Component } from 'react';
import './cityDetail.scss';


class cityDetail extends Component {
    // 构造函数获取到属性
    constructor(props){
        // 这个位置不能做其他任何操作，等super调用结束
        super(props);
        console.log(this.props.match.params.id);
    }
    render() {
        console.log(this.props);
               
        return (
            <div className="wrapper">
               <p>二级城市页面</p>   
            </div>
          );     
    }
   
}
export default cityDetail