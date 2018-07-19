import React, { Component } from 'react';
import './../../scss/components/header.css';

import { Link, withRouter } from 'react-router-dom';

// Ionicons
//import Ionicon from 'react-ionicons';

class HeaderView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({value: this.state.value});
        this.props.history.push('/search/' + this.state.value);
        //this.props.history.refresh();
        //this.props.dispatch(getData(this.state.value));
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {

        return (
            <div>
                <header className="nav-container nav-height">
                    <i className="ion-ios-search"></i>

                    <form onSubmit={this.handleSubmit}>
                        <input type="text" className="form-control search" placeholder="search" onChange={this.handleChange}/>
                    </form>
                    
                    <div className="pagination">
                        <ul>
                            <li>
                                <Link to={'/page/${pageid}'} activeClassName="current">2</Link>
                            </li>
                        </ul>
                    </div>

                </header>
            </div>
        );
    }
}

export default withRouter(HeaderView);