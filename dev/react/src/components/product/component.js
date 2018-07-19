// Common libraries
import React, { Component } from 'react';

// Include dumb component
import ProductView from "./view";


class ProductComponent extends Component {

    componentWillMount() {
        //console.log('orders for id: '+this.props.customerid);
        // console.log(this.props.data.price_history);
    }

    render() {
        // let $this = this;

        return (
            <ProductView data={this.props.data}/>
        );
    }
}

export default ProductComponent;