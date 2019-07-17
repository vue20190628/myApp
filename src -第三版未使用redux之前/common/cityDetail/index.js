import React, { Component } from 'react';
import './cityDetail.scss';
import store from "../../store"
import { increment_action } from './store/actionCreators';
class cityDetail extends Component {
    // 构造函数获取到属性
    constructor(props){      
        // 这个位置不能做其他任何操作，等super调用结束
        super(props);
        // console.log(this.props.match.params.id);
            // this.add=this.add.bind(this);
            this.state=store.getState().cityDetail;
            // console.log(this.state);
            // 订阅状态的修改
            this.unsubscribe=store.subscribe(()=>{
                this.setState(store.getState().cityDetail);
            })
    }
    render() {
        // console.log(this.props);            
        return (
            <div className="wrapper">
            <p>二级城市页面-----{this.state.number}</p> 
           <button onClick={this.add}> 增加 </button>
            </div>
          );     
    }
   add(){
    store.dispatch(increment_action(16));
   }
   //组件销毁的时候调用
   componentWillUnmount(){
       console.log("cityDetail 被注销了。。。。。。");
       //取消监听
       this.unsubscribe();
   }
   
}
export default cityDetail