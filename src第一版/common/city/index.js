import React, { Component } from 'react';
import './city.scss';


class CityComponent extends Component {
    constructor(){
        super();
        this.state={
            num:1,
            value:10
        };
        // 修改指向
        this.addHandle=this.addHandle.bind(this);
    }
    render() {
            let{num,value}=this.state;           
        return (
            <div className="city-wrapper">
                <p>{num}</p>  
                <p>{value}</p>        
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
    }
}
export default CityComponent