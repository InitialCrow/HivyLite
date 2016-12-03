import React, {Component} from 'react'
import ReactDOM from "react-dom"

import {connect} from 'react-redux'

class ProductForm extends Component{
	constructor(props, context) {
		super(props, context);
		this.state={hidden : false}
		this._onClick = this._onClick.bind(this);
	}
	_onClick(evt){
		this.setState({hidden : true})
	}

	render() {
		
			return(
					<div >
						{this.props.product.form}

						
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