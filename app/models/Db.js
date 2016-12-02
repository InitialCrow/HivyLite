'use strict';

let Database = function(){
	this.component = {react : require('react'), exec:require('child_process').exec},
	this.postgres = require('sequelize');
	this.sequelize = new this.postgres('test', 'postgres', 'postgres',{
				host : 'localhost',
				dialect:'postgres',
				logging: false
			});
	this.tables = {}; 


}
Database.prototype.postgresDB=function(migrate){
	if(this.postgres){
		if(migrate == true){
			this.migrate();
		}
		return this.sequelize;
		
	}
	else{
		console.log('no database connection go eat a hotDog !')
	}
	
}
Database.prototype.migrate = function(){
	var self = this;
	let Product = this.sequelize.define('products', {
	 
	  name: this.sequelize.Sequelize.STRING,
	  thumbnail : this.sequelize.Sequelize.STRING,
	  form: this.sequelize.Sequelize.JSON
	})
	let Request = this.sequelize.define('requests',{
		name: this.sequelize.Sequelize.STRING,
		value : this.sequelize.Sequelize.JSON,
		product_id : this.sequelize.Sequelize.INTEGER,
	})
	Product.hasMany(Request,{as:'products', foreignKey:'product_id', targetKey:'id'})

	Product.sync({force: true}).then(function () {

	  Product.create({
		name : 'Madelaine',
		thumbnail:'http://lorempixel.com/40/40',
		form :[
				self.component.react.createElement('p',{key:'cm_-1'},'Number of madelaine (X10) ?'),
				self.component.react.createElement('input',{type:"text", key:'cm_1', name:"nbMadelaine"}),
				self.component.react.createElement('p',{key:'cm_-2'},'Do you want choclate ?'),
				self.component.react.createElement('input',{type:"checkbox", key:'cm_2', name:"checkBoxChoco", value:"true"}),
				self.component.react.createElement('input',{key:'cm_3', type:'hidden' ,name : "productType", value :"Madelaine"})
			],

	    })
	  Product.create({
		name : 'Plane tickets',
		thumbnail:'http://lorempixel.com/40/40',
		form : [
				self.component.react.createElement('p',{key:'cp_-1',},'Departure Airport : '),
				self.component.react.createElement('input',{key:'cp_2', type:'text', name : "departure",placeholder:'ex: orly' }),

				self.component.react.createElement('p',{key:'cp_-2',},'Return Airport : '),
				self.component.react.createElement('input',{key:'cp_4', type:'text',name : "return", placeholder:'ex: lyon' }),

				self.component.react.createElement('p',{key:'cp_-2',},'Date '),
				self.component.react.createElement('input',{key:'cp_4', type:'text',  disabled:true ,name : "datePicker",placeholder:'need datePicker here' }),
				self.component.react.createElement('input',{key:'cp_5', type:'hidden' ,name : "productType", value :"Plane tickets"}),
			]

	    })
	  Product.create({
		name : 'Hivy T-shirt',
		thumbnail:'http://lorempixel.com/40/40',
		form :[
				self.component.react.createElement('p',{key:'ch_-1',},'Gender : '),

				self.component.react.createElement('label',{key:'ch_1',},self.component.react.createElement('input',{key:'ch_2', type:'checkbox', value:'F', name:'checkboxSex' }),'F'),
				
				self.component.react.createElement('label',{key:'ch_3',},self.component.react.createElement('input',{key:'ch_4', type:'checkbox', value:'M', name:'checkboxSex'}),'M'),
				self.component.react.createElement('p',{key:'ch_-2',},'Size : '),
				self.component.react.createElement('label',{key:'ch_5',},self.component.react.createElement('input',{key:'ch_6', type:'checkbox', value:'S', name:'checkboxSize'}),'S'),
				self.component.react.createElement('label',{key:'ch_7',},self.component.react.createElement('input',{key:'ch_8', type:'checkbox', value:'M', name:'checkboxSize'}),'M'),
				self.component.react.createElement('label',{key:'ch_9',},self.component.react.createElement('input',{key:'ch_10', type:'checkbox', value:'XL', name:'checkboxSize'}),'XL'),
				self.component.react.createElement('p',{key:'ch_-3',},'Color: '),
				self.component.react.createElement('input',{key:'ch_11', type:'text', name:'color',placeholder:'Blue, Red, Green'}),
				self.component.react.createElement('input',{key:'ch_12', type:'hidden' ,name : "productType", value :"HivyTshirt"}),
			]
	    })
	
		  Request.sync({force: true}).then(function () {
			Request.create({
				name : 'Hi',
				value : [{describe:['gender:','size:'], value:['F','XL']}],
				product_id : 1

			})
			Request.create({
				name : 'Hiv T',
				value :[{describe:['gender:','size:'], value:['M','S']}],
				product_id : 1

			})
			self.tables.product = Product
			self.tables.request = Request
		})	
     	})
}
module.exports = new Database();




