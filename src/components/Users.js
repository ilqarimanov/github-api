import React, { Component } from 'react'
import User from './User'

class Users extends Component {
    render() {
        return (
            <div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-12" style={{"height":"100vh","overflowY":"scroll"}}>
                        {this.props.users.map(user=>(
                            <User user={user} />
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Users
