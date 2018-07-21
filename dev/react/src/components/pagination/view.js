import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './scss/pagination.css';

class PaginationView extends Component {
    render() {

        return (
            <nav aria-label="Page navigation">
                <ul className="pagination">
                    <li><NavLink to="/page/1" activeClassName="active">1</NavLink></li>
                    <li><NavLink to="/page/2" activeClassName="active">2</NavLink></li>
                    <li><NavLink to="/page/3" activeClassName="active">3</NavLink></li>
                    <li><NavLink to="/page/4" activeClassName="active">4</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default withRouter(PaginationView);