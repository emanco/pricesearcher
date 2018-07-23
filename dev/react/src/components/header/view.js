import React, { Component } from 'react';
import Ionicon from 'react-ionicons';

import './scss/header.css';

import { Link, withRouter } from 'react-router-dom';

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
                <header className="container-fluid">
                    <div className="row">
                            <div className="col-sm-3 logo">
                                <div className="inner">
                                    <Link to="/" activeclassname="active"><b>Price</b>Searcher</Link>
                                </div>
                            </div>

                            <div className="col-sm-9 search">
                                <div className="inner">
                                    <form onSubmit={this.handleSubmit}>
                                        <input type="text" className="form-control" placeholder="Type a search term and hit enter!" onChange={this.handleChange}/>

                                        <button type="submit" value="Search" className="submit">
                                        <Ionicon icon="ios-search" fontSize="60px" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default withRouter(HeaderView);