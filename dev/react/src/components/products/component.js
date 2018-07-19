// Common libraries
import React, { Component } from 'react';

// Include dumb component
import ProductsView from "./view";


class ProductsComponent extends Component {

    componentWillMount() {
        //console.log('orders for id: '+this.props.customerid);
        // console.log(this.props.data.price_history);
    }

    render() {
        // let $this = this;

        return (
            <ProductsView data={this.props.data} price_history={this.props.data.price_history}/>
        );
    }
}

export default ProductsComponent;