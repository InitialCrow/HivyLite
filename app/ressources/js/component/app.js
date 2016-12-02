import React from 'react'
import ProductList from '../container/product-input.js'
import ProductForm from '../container/product-form.js'
import RequestForm from '../container/request-form.js'
const App = () => (
	<section className="form-container">
		
		<form className ="form-main" action="/addRequest" method="post">
			<label htmlFor="product_name" className="form-label" >What do you need ?

			<ProductList />

			</label>
			<RequestForm />
			<ProductForm />
			
			<section className="form-button-container">
				<button type="" className="cancel-button">Cancel</button>
				<button type="submit" className="clearfix form-button">Create a new request</button>
			</section>
		</form>

	</section>
)
export default App;