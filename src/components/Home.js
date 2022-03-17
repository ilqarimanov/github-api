import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import img2 from '../img/2.jpg'
import Search from './Search'
import axios from 'axios'
 
import Left from './Left'
import Right from './Right'
import Users from './Users'





class Nav extends Component {

  constructor(props){
    super(props);
    this.searchUsers = this.searchUsers.bind(this);
    this.state={
      users: []
    }
  }
  searchUsers(keyword){
    axios
    .get(`https://api.github.com/search/users?q=${keyword}`)
    .then(res=>this.setState({users:res.data.items}))
  }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand ms-3" href="https://github.com"> <i className="fab fa-github"></i></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <Search searchUsers={this.searchUsers} />
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-4" >
      <li><Link to="/pull">Pull requests</Link></li>
      <li><a href="#">Issues</a></li>
      <li><a href="#">Marketplace</a></li>
      <li><a href="#">Explore</a></li>
  
      </ul>
      <div className="icon">
      <i class="far fa-bell me-3"></i>
        <img className="me-3" src={img2} alt="error" />
      </div>

    </div>
  </div>
</nav>
<div className="row">
                    <div className="col-3 col1 py-2 px-5"><Left/></div>
                    <div className="col d-flex"><Users users={this.state.users}/></div>
                    <div className="col-3 col3"> <Right/></div>
                </div>
            </div>
        )
    }
}

export default Nav
