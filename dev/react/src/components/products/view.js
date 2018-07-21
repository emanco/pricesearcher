import React, { Component } from 'react';
// import PriceComponent from "../price/component";
import { Link, withRouter } from 'react-router-dom';

import './scss/products.css';

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

            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2 item">
                <div className="inner">
                    <div>
                        <Link to={"/products/"+$this.props.data.product_id}>
                            <div className="picture" style={{backgroundImage:'url('+$this.props.data.image_url+')'}}>
                            </div>
                        </Link>
                    </div>

                    <div className="product-infos">

                        <span>{$this.props.data.ps_category}</span>

                        <Link to={"/products/"+$this.props.data.product_id}>
                            <p>{$this.props.data.product_name}</p>
                        </Link>

                        <div className="price">
                            £ {$this.props.data.price}
                        </div>
                    </div>
                </div>

                {/*<div><a href={"/products/"+$this.props.data.product_id}>Product ID {$this.props.data.product_id}</a></div>*/}




                {/*<div>Price {$this.props.data.price}</div>*/}

                {/*<div>Description {$this.props.data.description}</div>*/}
                {/*<div>Category {$this.props.data.ps_category}</div>*/}

                {/*{console.log(this.props.data.price_history)}*/}
                {/*{$this.props.data.price_history.map(i=> {return (i);})}*/}
            </div>

            );
        }

    }
}

export default withRouter(ProductsView);