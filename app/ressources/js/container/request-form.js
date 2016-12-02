import React, {Component} from 'react'
import ReactDOM from "react-dom"

import {connect} from 'react-redux'

class RequestForm extends Component{


	render() {
		if(this.props.request.value!== undefined){
			let incrementId=0;
			let descList = [];
			let i = 0
		
			return(
				<ul >

					{this.props.request.value[0].describe.map((desc)=>{
						descList.push(desc)
						
					})}
					{this.props.request.value[0].value.map((value)=>{
							
					
							return <li className='request-desc' key={incrementId++}>{descList[i++]}{ value}</li>

					})}
					
				</ul>
			
			)
		}
		else{
			
			return (
				<div></div>
			)
				
		}
	}
}
function mapStateToProps(state){
	return {
		request : state.activeRequest
	}
}
// function matchDisptachProps(dispatch){
// 	return bindActionCreators({takeProduct : takeProduct}, dispatch)
// }

export default connect(mapStateToProps)(RequestForm)