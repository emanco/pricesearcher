import React, { Component } from 'react';
// import PriceComponent from "../price/component";

// import '../../scss/components/orders.css';

class ProductView extends Component {




    render() {

        let $this = this;

        return (

            <div>
                <div>Product ID {$this.props.data.product_id}</div>
                <div>Name {$this.props.data.product_name}</div>
                <div>Brand {$this.props.data.brand}</div>
                <div><img src={$this.props.data.image_url} alt={$this.props.data.product_name}/></div>
                <div>Price {$this.props.data.price}</div>
                <div>Description {$this.props.data.description}</div>
                <div>Category {$this.props.data.ps_category}</div>

                {/*{$this.props.data.price_history.map(i=> {return (i);})}*/}
            </div>

            );

    }
}

export default ProductView;