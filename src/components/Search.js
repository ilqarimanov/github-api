import React, { Component } from 'react'

export class Search extends Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            keyword: '13'
        }
    }

    onChange(e){
        this.setState({
            keyword: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        this.props.searchUsers(this.state.keyword);
    }
    render() {
        return (
            <div>
<form onSubmit={this.onSubmit}>                 
    <div className="input-group">
          <input onChange={this.onChange} type="text" className="form-conrol" />
          <div className="input-group-append">
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
           
</form>
     </div>
        )
    }
}

export default Search
