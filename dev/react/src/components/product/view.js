import React, { Component } from 'react';
import { LineChart, Line } from 'recharts';

// import PriceComponent from "../price/component";

import './scss/product.css';

class ProductView extends Component {


    componentWillMount() {

    }


    render() {

        let $this = this;
        // const data = this.props.data.price_history;
        const data = [
            {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
            {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
            {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
            {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
            {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
            {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
            {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
        ];

        const prices = Object.values(this.props.data.price_history);

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
                            <div className="brand">
                                {$this.props.data.brand}
                            </div>
                            <p>{$this.props.data.description}</p>
                            <div className="price">
                                £ {$this.props.data.price}
                            </div>
                        </div>


                        {/*{console.log(arr)}*/}

                        {/*{$this.props.data.price_history.map((element, index) => (*/}
                            {/*<p key={index}>Hello, {element.price}!</p>*/}
                        {/*))}*/}

                        <LineChart width={400} height={400} data={data}>
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                        </LineChart>

                    </div>
                </div>
            </div>

            )

    }
}

export default ProductView;