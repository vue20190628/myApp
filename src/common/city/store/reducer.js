// C 是模块里通过default导出的
import C, { INCREMENT_TYPE, DECREMENT_TYPE } from './actionTypes'
//定义初始状态
const defaultState = {
    count: 10,
    name: "字符串",
    cityData: [],
    city: []
}
//定义修改状态的方法，类似于muttetion
//action={type:”想做的事情"}
//注意
// 不要修改原来的state，新建一个副本，修改后再return
function reducer(state = defaultState, action) {
    // console.log(11111,action);
    switch (action.type) {
        case INCREMENT_TYPE:
            // 不好写法->修改原来的状态
            // state.count += action.value;
            // return state;
            //正确写法：copy一个state
            // 返回修改后的状态
            // return Object.assign({}, state, { count:action.value});
            // 1.copy一个state
            var tempState = Object.assign({}, state);
            // 2
            tempState = { ...state };
            // 3快速深拷贝一个对象的方法
            tempState = JSON.parse(JSON.stringify(state));
            tempState.count += action.value;
            //  返回修改后的副本状态，更新之前的状态
            return tempState;
        case DECREMENT_TYPE:
            // 修改状态           
            tempState = JSON.parse(JSON.stringify(state));
            tempState.count -= action.value;
            // 返回修改后的状态
            return tempState;
        case "rename_type":
            tempState = JSON.parse(JSON.stringify(state));
            tempState.name = action.value;
            //返回修改后的状态
            return tempState;
        case "city_list_action":
            tempState = JSON.parse(JSON.stringify(state));
            tempState.cityData = action.data;
            //返回修改后的状态
            return tempState;
        case "city_list":
            tempState = JSON.parse(JSON.stringify(state));
            tempState.city = action.data;
            //返回修改后的状态
            return tempState;
        default:
            return state;

    }
}
export default reducer;