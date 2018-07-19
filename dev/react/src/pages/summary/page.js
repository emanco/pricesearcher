import React, { Component } from 'react';
import ProductsComponent from '../../components/products/component';
import ProductComponent from '../../components/product/component';

// import CustomerComponent from '../../components/customers/component';
// import OrderComponent from '../../components/orders/component';
// import PrescriptionComponent from '../../components/prescriptions/component';

import { connect } from 'react-redux';

import {getData} from "./actions";

//import $ from 'jquery';



class Summarypage extends Component {

    componentWillMount() {
        console.log('id is '+this.props.match.params.pageid);
        //this.props.dispatch(getData(this.props.match.params.customerid));
        this.props.dispatch(getData(this.props.match.params.productid, this.props.match.params.pageid));
    }

    componentDidMount() {
        console.log('mounted');
    }

  render() {




      if (this.props.loading === true || typeof this.props.payload === 'undefined') {
          return (
              <div>
                  <div className="loading">
                    <p>Loading... </p>
                  </div>
              </div>
          );
      }

      if (this.props.success === false) {
          return (
              <div>
                  <p><strong>Error:</strong> {this.props.payload.message}</p>
              </div>
          );
      }



      let $id = this.props.match.params.productid;

      if ($id) {

        return (
            <div>
                <ProductComponent data={this.props.payload[0].data[0]}/>
            </div>
        )

      } else {


          return (
              <div>

                  {this.props.payload[0].data.map(function(product, i){
                     return <ProductsComponent key={i} data={product}/>
                  })}


                  {/*<div className="left-panel">


                      <CustomerComponent customerid={$id} data={this.props.payload[0].data}/>


                      <section className="component component-customer-orders row">
                          <h2 className="heading2 heading">
                              Orders
                              <button className="btn -add">Place Order</button>
                          </h2>
                          <p className="sub-text">Showing {this.props.payload[1].data[0].limit} of {this.props.payload[1].data[0].count} </p>

                          {this.props.payload[1].data[0].results.map(function(order, i) {
                              return <OrderComponent key={i} id={i} customerid={$id} data={order} />
                          })}

                      <button className="btn">View More</button>
                      </section>

                     <PrescriptionComponent customerid={$id} data={this.props.payload[2].data} name={this.props.payload[0].data.first_name+' '+this.props.payload[0].data.last_name} />
                  </div>*/}

              </div>

          );
      }
  }
}

//export default Summarypage;


export default connect((state) => {
    return state.summaryReducer;
})(Summarypage);