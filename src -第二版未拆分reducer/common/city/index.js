import React, { Component } from 'react';
import './city.scss';
import store  from '../../store/'
import { INCREMENT_TYPE } from '../../store/actionTypes';
import { increment_action } from '../../store/actionCreators';

class CityComponent extends Component {
    constructor(){
        super();
        this.state={
            num:1,
            value:10
        };      
        // 修改指向
        this.addHandle=this.addHandle.bind(this);
        // console.log(store,store.getState());
        //订阅/监听：只要状态被修改，就会被回调
        store.subscribe(()=>{
            // console.log(333,store.getState().count);
            // 监听到变化后，同步到组件state上去显示
            this.setState(store.getState());
        });
    // 解决第一次刷新没值的问题
    // this.state={...store.getState(),...this.state};
    // 把三个对象合并到第一个对象上，返回值也是合并的对象
    this.state=Object.assign({},store.getState(),this.state);
    // console.log(this.state);
    }
    render() {
        // console.log(222);
            let{num,value,count}=this.state;           
        return (
            <div className="city-wrapper">
                    <p>count:{count}----num:{num}---value:{value}</p>  
                {/* <p>{store.getState().count}</p> */}
                <button onClick={this.addHandle}>累加</button>
            </div>
        );
    }
    // 自定义函数
    addHandle(){
        this.setState((oldState)=>{
            return {
                value:oldState.value+10
            }
        });
        //修改store的状态
        //调用专门创建action的函数
        let action=increment_action(20);
        store.dispatch(action);
        // console.log(action);
    }
}
export default CityComponent