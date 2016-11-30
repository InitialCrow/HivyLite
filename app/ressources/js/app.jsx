
import $ from 'jquery';

((ctx)=>{
	var app={
		store :  require('./action/index.js'),
		react :  require('react'),
		reacDom : require('react-dom'),
		thunk :  require('redux-thunk').default, 
		init(){
			console.log(this.store);
		},
		submit(){
			this.store.dispatch({
			  type: 'ADD_TODO',
			  text: 'Read the docs'
			});
		}
	}
	ctx.app = app;
})(window)