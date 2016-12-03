import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'

export default class SearchContainer extends Component {
  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange() {
    this.props.search(this.search.value)
  }
  render() {
    return (
      <div className='SearchContainer'>
        <div className='search-container'>
          <Input size='huge' className='icon'  >
            <input onChange={this.handleChange} ref={(input) => this.search = input} placeholder='Search for a book or an author..'/>
          </Input>
        </div>
      </div>
    );
  }
}
// SearchContainer.propTypes = {
// };
