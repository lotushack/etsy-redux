import React, {Component} from 'react';
import {connect} from 'react-redux'

import Product from "../components/Product";

class ProductList extends Component {

    render() {
        const {products} = this.props;
        // console.log('product props', products);
        // Create a dynamically populated list of `<Product />` components
        // Each `<Product />` component should have a single object from the `products` state property (array)
        // applied to the component as a `product` property
        return (
            <ul className="ProductList">
              {products.map((productInfo) => {
                return(
              <Product
                key={products.listing_id}
                {...productInfo}
              />
            )
            })}
            </ul>
        );

    }
}

// Using the `mapStateToProps` function, filter the array stored in the
// state `products` property based on 3 criterea:
// - `underTwenty`
// - `overTwenty`
// - `all` or the default
const mapStateToProps = function(state) {
  // console.log(state);
  // let products;

    return {products: state.products}
}

export default connect(mapStateToProps)(ProductList);
