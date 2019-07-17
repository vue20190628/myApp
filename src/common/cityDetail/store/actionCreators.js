import { INCREMENT_TYPE } from "./actionTypes";

//创建项目中的action



export function increment_action(value){
    return {
        type:INCREMENT_TYPE,
        value
    };
}

// 保持用户信息的action
// 修改用户名的action等......
// export {increment_action}