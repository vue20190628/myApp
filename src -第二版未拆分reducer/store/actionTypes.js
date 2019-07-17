// 定义常量保存action的type指
// 常量命名规范：大写
const A=10;
// 模块里default只能用一次外面使用的时候，可以重新命名
export default A;

export const INCREMENT_TYPE="increment_增加";

export const DECREMENT_TYPE="decrement_减小";

//  const INCREMENT_TYPE="increment_增加";

//  const DECREMENT_TYPE="decrement_减小";
//  export {INCREMENT_TYPE,DECREMENT_TYPE};