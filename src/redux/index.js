
import { createStore } from 'redux';
const initState = {};


//改写之前=====================================================

// const reducer = (state, action) => {
// 	return action;
// };
// //debugger;
// const store = createStore(reducer, initState);
// store.dispatch({
// 	type: 'init',
// 	payload: 'Hello world',
// });
// console.log(store.getState());

//改写=============================================================

//发起的动作action
const action = {
	type: 'init',
	payload: 'Hello world',
}
//动作将会进入处理器reducer中，state是前一次保存的数据状态，return生成下一个数据状态(和当前数据结合生成一个新的数据状态)
const reducer = (state, action) => {
	return Object.assign({}, state, action);
};
const store = createStore(reducer, initState);
store.dispatch(action);
console.log(store.getState());









// ===========redux整体架构=========
// action（行为，动作）      ==>发起AJAX
// reducer（Handler处理器） ==>JSON处理
// state（最后的状态）       ==>JSON保存

// AJAX ==> 返回JSON ==> UI渲染

/*
 * redux的主要对外api
 * ------- 中间件流转逻辑
 *
 * applyMiddleware

 * ------- utility工具
 * bindActionCreators
 * combineReducers  必掌握
 * compose
 * ------- 最核心的api
 * createStore 
 */

 /*let model = {} 
	model.a = 'a' 
	//无序的改变

	优势： trackable model
	action 发起变更 'changeA'	
	===> reducers   返回一个新的model {a:1}
	===> model ==> {a:1}

 */
// require('./demo');
require('./createStore/')
// require('./combineReducers/')
// require('./bindActionCreators/')

// require('./compose/')
// require('./applyMiddleware/')

