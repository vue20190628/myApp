import React, { Component } from 'react';
import './cityDetail.scss';
import {connect} from "react-redux";
class cityDetail extends Component {
    // 构造函数获取到属性
    constructor(props) {
        // 这个位置不能做其他任何操作，等super调用结束
        super(props);
    }
    render() {          
        return (
            <div className="wrapper">
                {/* <p>二级城市页面-----{this.state.number}</p>   */}
                {/* <button onClick={this.add}> 增加 </button> */}
                <p>{this.props.a}</p>
                <button onClick={()=>this.props.addNumber(1)}> 增加 </button>
            </div>
        );
    }
    //组件销毁的时候调用
    componentWillUnmount() {       
    }
}
function second(state) {
    return {
        a: state.cityDetailReducer.number
    }
}
const sec=(dispatch)=>{
    return{
        addNumber(n){
            dispatch({type:'INCREMENT_TYPE',value:n});
        }
    }
}
cityDetail = connect(second,sec)(cityDetail);
export default cityDetail