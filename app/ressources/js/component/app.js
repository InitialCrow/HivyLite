import React from 'react'
import ProductList from '../container/product-input.js'
import ProductForm from '../container/product-form.js'
const App = () => (
	<section className="form-container">
		<form className ="form-main" action="#" method="post">
			<label htmlFor="product_name" className="form-label" >What do you need ?
			<ProductList />

			</label>
			<ProductForm />
			
			<section className="form-button-container">
				<button type="" className="cancel-button">Cancel</button>
				<button type="submit" className="clearfix form-button">Create a new request</button>
			</section>
		</form>

	</section>
)
export default App;