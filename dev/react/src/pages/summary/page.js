import React, { Component } from 'react';
import ProductsComponent from '../../components/products/component';
import ProductComponent from '../../components/product/component';

import PaginationView from '../../components/pagination/view';

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

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            //console.log('next props: '+nextProps.location.pathname);
            this.props.dispatch(getData(nextProps.match.params.productid,nextProps.match.params.pageid));
            //take action here
        }
    }

  render() {




      if (this.props.loading === true || typeof this.props.payload === 'undefined') {
          return (
              <div>
                  <div className="main container products-container">
                      <div className="row">
                          <div className="loading">
                            <p>Loading... </p>
                          </div>
                      </div>
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
                <div className="main container product-container">
                    <div className="row">
                        <ProductComponent data={this.props.payload[0].data[0]}/>
                    </div>
                </div>
            </div>
        )

      } else {


          return (
              <div>

                  <div className="main container products-container">

                      <div className="row">

                          {this.props.payload[0].data.map(function(product, i){
                             return <ProductsComponent key={i} data={product}/>
                          })}

                          <PaginationView/>

                      </div>

                  </div>

              </div>

          );
      }
  }
}

//export default Summarypage;


export default connect((state) => {
    return state.summaryReducer;
})(Summarypage);