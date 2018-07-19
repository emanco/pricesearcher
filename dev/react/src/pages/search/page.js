import React, { Component } from 'react';
import ProductsComponent from '../../components/products/component';

import { connect } from 'react-redux';

import {getData} from "./actions";
import {withRouter} from "react-router-dom";


class Searchpage extends Component {

    componentWillMount() {

        this.props.dispatch(getData(this.props.match.params.searchid));
    }

    componentDidMount() {
        console.log('mounted');

    }

    shouldComponentUpdate() {
        return true;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            console.log('next props: '+nextProps.location.pathname);
            this.props.dispatch(getData(nextProps.match.params.searchid));
            //take action here
        }
    }

  render() {


      if (this.props.loading === true || typeof this.props.payload === 'undefined') {
          return (
              <div>
                  <div className="loading">
                    <p>Loading search... </p>
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



      //let $id = this.props.match.params.searchid;

      if (this.props.payload[0].data.length === 0) {

        return (
            <div>
                <p>No results found!</p>
            </div>
        )

      } else {


          return (
              <div>

                  {this.props.payload[0].data.map(function(product, i){
                     return <ProductsComponent key={i} data={product}/>
                  })}

              </div>

          );
      }
  }
}


export default withRouter(connect((state) => {
    return state.searchReducer;
})(Searchpage));