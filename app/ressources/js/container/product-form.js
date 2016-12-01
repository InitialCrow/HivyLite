import React, {Component} from 'react'
import ReactDOM from "react-dom"

import {connect} from 'react-redux'

class ProductForm extends Component{


	

	
	render() {
		
		return(
			<div>
				{this.props.product.field}
				
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