import React, {Component} from 'react'
import ReactDOM from "react-dom"
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {takeProduct} from '../action/index'
class ProductList extends Component{

	constructor(props, context) {
		super(props, context);

		this.state = {
			productsList : ''
		};
	}
	showList(product){
		
			return(
				<li key={product.id}>{product.name}</li>
			)
		
	}
	
	change(evt){
		
		let searchRequest = evt.target.value;
		let products = this.props.products;
		let list = []

		for (let product of products){
			
			if(product.name.includes(searchRequest)){
				console.log(product)
				list.push(React.createElement("li",{className: "product", key:product.id, onClick:()=>{this.props.takeProduct(product)}},product.name))
				
			}
		

		}
		this.setState({productsList:list})
	}
	
	render() {
		
		return(
			<div>
				<input onChange={(evt)=>this.change(evt)} className="form-input" id="product-name" name="product_name" type="text" placeholder="products"
				/>
				<ul id="product-list">
					{this.state.productsList}
					
					
				</ul>
				
			</div>
			
			
		)
	}
}
function mapStateToProps(state){
	return {
		products : state.products
	}
}
function matchDisptachProps(dispatch){
	return bindActionCreators({takeProduct : takeProduct}, dispatch)
}

export default connect(mapStateToProps, matchDisptachProps)(ProductList)