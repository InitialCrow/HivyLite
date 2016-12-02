import {combineReducers} from 'redux'
import ProductReducer from './reducer-products-db'
import ActiveProductReducer from './reducer-active-product'
import ActiveRequestReducer from './reducer-active-request'
import RequestReducer from './reducer-requests-db'

const allReducers = combineReducers({
	products : ProductReducer,
	activeProduct : ActiveProductReducer,
	activeRequest : ActiveRequestReducer,
	requests :RequestReducer
})
export default allReducers
// export default function todoApp(state = [], action) {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return  Object.assign({}, state, {
// 	        visibilityFilter: action.filter
// 	      });
//     case 'SUBMIT_FORM':
//       return  Object.assign({}, state, {
// 	        data : action.data
// 	      });
//       case 'SEARCH':
//       return Object.assign({}, state, {
// 	        data : action.data,
// 	        test : action.test
// 	      });
//     default:
//       return state
//   }
// }