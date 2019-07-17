//最大的reducer整合来自各个组件的reducer
import cityReducer from '../common/city/store/reducer'
import cityDetailReducer from '../common/cityDetail/store/reducer'
// 用来合并reducer
import {combineReducers} from "redux";
 let reducer=combineReducers({
    cityReducer:cityReducer,
    cityDetailReducer:cityDetailReducer
});
export default reducer;