import {combineReducers} from 'redux'
import ProductReducer from './reducer-products'
import ActiveProductReducer from './reducer-active-product'

const allReducers = combineReducers({
	products : ProductReducer,
	activeProduct : ActiveProductReducer
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