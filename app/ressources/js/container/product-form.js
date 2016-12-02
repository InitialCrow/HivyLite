import React, {Component} from 'react'
import ReactDOM from "react-dom"

import {connect} from 'react-redux'

class ProductForm extends Component{
	constructor(props) {
	    super(props);
	    this.state = {value: 3};
	
 	    this._onChangeStore = this._onChangeStore.bind(this);
	}
	_onChangeStore() {
	  var newList = getListFromStore();  // your own function to get list from store
	  this.setState({ options: newList});            // update state here
	}
	render() {
		return(
			<div>
				{this.props.product.form}

				<input key='rdmy1' type='hidden' name="product_id" value={this.state.value}/>
				
			</div>
			
			
		)
	}
}
function mapStateToProps(state){
	return {
		product : state.activeProduct
	}
}
// function matchDisptachProps(dispatch){
// 	return bindActionCreators({takeProduct : takeProduct}, dispatch)
// }

export default connect(mapStateToProps)(ProductForm)