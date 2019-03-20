import React, {Component} from 'react'
import { Link } from 'react-router';

class DashboardView extends Component {
    render () {
        return (
            <div className="">
                <h3 className="login100-form-title p-b-33">Welcome to Movie Portal</h3>
                <hr />
                   <ul className="nav nav-pills">
                      <li><Link to="/detailsview">Dashboard View</Link></li>
                      <li><Link to="/exploreview">Explore View</Link></li>
                      <li><Link to="/ratingpage">Rating Page</Link></li>
                      <li><Link to="/">Logout</Link></li>
                   </ul>
                 <hr />
                 {this.props.children}
            </div>
        )
    }
}

export default DashboardView
