import React, {useContext} from 'react';

import ProviderContext from '../Context/ProductContext'


// Components
import Product from './Product';


const Products = props => {
	const {products} = useContext(ProviderContext);

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
				/>
			))}
		</div>
	);
};

export default Products;
