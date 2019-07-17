//最大的reducer整合来自各个组件的reducer
import cityReducer from '../common/city/store/reducer'
// 用来合并reducer
import {combineReducers} from "redux";
import cityDetailReducer from '../common/cityDetail/store/reducer';
 let reducer=combineReducers({
    cityReducer:cityReducer,
    cityDetail:cityDetailReducer
});
export default reducer;