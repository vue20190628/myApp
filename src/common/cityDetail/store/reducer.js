
//定义初始状态
const defaultState = {
    number: 2,
}

//定义修改状态的方法，类似于muttetion
//action={type:"想做的事情"}
//注意
// 不要修改原来的state，新建一个副本，修改后再return
function reducer(state = defaultState, action) {
    // console.log(11111,action);
    switch (action.type) {
        case 'INCREMENT_TYPE':           
            // 3快速深拷贝一个对象的方法
            var tempState=JSON.parse(JSON.stringify(state));
            tempState.number+=action.value;
              //  返回修改后的副本状态，更新之前的状态
             return tempState;
        case 'DECREMENT_TYPE':
            // 修改状态           
             tempState=JSON.parse(JSON.stringify(state));
            tempState.number-= action.value;
            // 返回修改后的状态
            return tempState;
        default:
            return state;
    }
}
export default reducer;