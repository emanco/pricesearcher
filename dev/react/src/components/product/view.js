import React, { Component } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// import PriceComponent from "../price/component";

import './scss/product.css';

class ProductView extends Component {


    componentWillMount() {

    }


    render() {

        let $this = this;
        // const history = Object.values(this.props.data.price_history);
        // const prices = Object.entries(this.props.data.price_history).map(([key, value]) => ({key,value}));
        const prices = Object.entries(this.props.data.price_history).map(([date, price]) => ({date,price}));

        return (

            <div className="container">
                <div className="row">

                    <div className="col-md-4">
                        <div className="picture" style={{backgroundImage:'url('+$this.props.data.image_url+')'}}>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <div className="content">
                            <h1>{$this.props.data.product_name}</h1>
                            <hr/>
                            <div className="brand">
                                <h5>Brand Name</h5>
                                {$this.props.data.brand}
                            </div>
                            <hr/>
                            <div>
                                <h5>Description</h5>
                                <p>{$this.props.data.description}</p>
                            </div>
                            <hr/>
                            <div className="price">
                                <h5>Current Price</h5>
                                £ {$this.props.data.price}
                            </div>
                            <hr/>
                            <div className="price-history">
                                <h5>Price History</h5>
                                <ResponsiveContainer>
                                    <AreaChart data={prices}
                                               margin={{top: 20, right: 20, left: 0, bottom: 0}}>
                                        <CartesianGrid strokeDasharray="3 3"/>
                                        <XAxis dataKey="date"/>
                                        <YAxis domain={["dataMin-1", "dataMax"]}/>
                                        <Tooltip/>
                                        <Area name="Price" type='monotone' dataKey='price' unit='£' stroke='#0165BF' fill='#73B0E7' />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            )

    }
}

export default ProductView;