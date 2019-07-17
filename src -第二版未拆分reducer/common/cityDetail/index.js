import React, { Component } from 'react';
import './cityDetail.scss';
class cityDetail extends Component {
    // 构造函数获取到属性
    constructor(props){      
        // 这个位置不能做其他任何操作，等super调用结束
        super(props);
            this.state={
                number:1
            }
        // console.log(this.props.match.params.id);
            this.addHandle=this.addHandle.bind(this);
    }
    render() {
        // console.log(this.props);  
        let{number}=this.state;            
        return (
            <div className="wrapper">
               <p>二级城市页面</p> 
               <p>{number}</p>
               <button onClick={this.addHandle}>加</button>  
            </div>
          );     
    }
    addHandle(){
            this.setState((oldState)=>{
                return{
                    number:oldState.number+1
                } 
            })
    }
   
}
export default cityDetail