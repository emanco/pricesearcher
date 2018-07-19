// Common libraries
import React, { Component } from 'react';

// Include dumb component
import PriceView from "./view";


class PriceComponent extends Component {

    componentWillMount() {
        //console.log('orders for id: '+this.props.customerid);
    }

    render() {
        let $this = this;

        return (
            <PriceView data={$this.props.data}/>
        )
    }
}

export default PriceComponent;