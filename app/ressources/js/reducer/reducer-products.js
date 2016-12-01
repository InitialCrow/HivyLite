import React from 'react'
export default function(){
	return [
		{
			id : 1,
			name : 'plane tickets',
			thumbnail : '',

			field : [
				React.createElement('label',{key:'cp_1',},React.createElement('input',{key:'cp_2', type:'text', placeholder:'ex: orly' }),'Departure airport'),
				React.createElement('label',{key:'cp_3',},React.createElement('input',{key:'cp_4', type:'text', placeholder:'ex: lyon' }),'Return airport'),
			]
		

		},
		{
			id : 2,
			name : 'Hivy T-shirt',
			thumbnail :'',
			field : [
				React.createElement('label',{key:'ch_1',},React.createElement('input',{key:'ch_2', type:'checkbox', value:'F' }),'F'),
				
				React.createElement('label',{key:'ch_3',},React.createElement('input',{key:'ch_4', type:'checkbox', value:'M'}),'M'),
			]

			
		},
			{
			id : 3,
			name : 'Madelaine',
			thumbnail :'',
			field : [React.createElement('p',{key:'cm_1'},'Do you want choclate ?'),React.createElement('input',{type:"checkbox", key:'cm_2',})]
			
		}
	]
}