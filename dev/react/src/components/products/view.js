import React, { Component } from 'react';
// import PriceComponent from "../price/component";

// import '../../scss/components/orders.css';

class ProductsView extends Component {




    render() {

        let $this = this;


        if ($this.props.data.price_history === undefined) {
            return (
                <div>
                    No data!
                </div>
            );
        } else {

        return (

            <div>
                <div><a href={"/products/"+$this.props.data.product_id}>Product ID {$this.props.data.product_id}</a></div>
                <div>Name {$this.props.data.product_name}</div>
                <div>Brand {$this.props.data.brand}</div>
                <div><img src={$this.props.data.image_url} alt={$this.props.data.product_name}/></div>
                <div>Price {$this.props.data.price}</div>
                <div>Description {$this.props.data.description}</div>
                <div>Category {$this.props.data.ps_category}</div>

                {console.log(this.props.data.price_history)}
                {/*{$this.props.data.price_history.map(i=> {return (i);})}*/}
            </div>

            );
        }

    }
}

export default ProductsView;