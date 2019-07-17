import React, { Component } from "react";
import "./city.scss";
import { increment_action } from "./store/actionCreators";
//获取到注入store
import { connect } from "react-redux";
import axios from "axios"
import CityListComponent from "./components/cityListComponetnt";
import CityList from "./components/city";
import { Button } from 'antd-mobile';
class CityComponent extends Component {
    constructor() {
        super();
        this.state = {
            num: 10,
            value: 100,
            cityData: [],
            city:[]
        };
    }
    render() {
        // let { cityData } = this.state;
        var {cityData}=this.props;
        var {city}=this.props;
        return (
            <div className="city-wrapper">
                <p>{this.props.name}-{this.props.a}</p>
                <button onClick={() => { this.props.rename('改变') }}>点击改名</button>
                --
                <Button onClick={() => { this.props.addCount(20) }}>点击累计</Button>
                <hr />
                <CityListComponent cityData={cityData}></CityListComponent>
                <CityList city={city}></CityList>
            </div>
        );

    }

    //组件销毁的时候回调
    componentWillUnmount() {
    }
    componentDidMount() {
        axios.get("https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists").then((res) => {
            console.log(res);
            // this.setState({
            //     cityData: res.data           
            // });
            this.props.mapCityList(res.data)
        });
        axios.get("https://elm.cangdu.org/v1/cities?type=hot").then((res) => {
            console.log(res);
            // this.setState({
            //     cityData: res.data           
            // });
            this.props.CityList(res.data)
        });
    }
}


function mapStateToProps(state) {
    // console.log("mapStateToProps",state);
    return {
        // 这个key会变成组件的属性，通过props就可以获取到
        a: state.cityReducer.count,
        name: state.cityReducer.name,
        cityData:state.cityReducer.cityData,
        city:state.cityReducer.city
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // 这个方法会自动映射到属性props上
        addCount: function (n) {
            // console.log("通过属性可以调用我",n);
            dispatch(increment_action(n));
        },
        rename(newName) {
            // console.log(newName);
            // dispatch(rename_action(newName));
            dispatch({ type: 'rename_type', value: newName });
        },
        // 保存cityList
         mapCityList(data){
            // 触发rencer
            dispatch({type:"city_list_action",data:data})
        },
        CityList(data){
            // 触发rencer
            dispatch({type:"city_list",data:data})
        },
    }
};

CityComponent = connect(mapStateToProps, mapDispatchToProps)(CityComponent);
export default CityComponent;