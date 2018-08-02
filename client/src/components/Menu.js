import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Search from './Search';
import { Menu } from 'semantic-ui-react';

export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item active={activeItem === 'home'} onClick={this.handleItemClick}>
          <Link to='/'>Landing</Link>
        </Menu.Item>
        <Menu.Item active={activeItem === 'home'} onClick={this.handleItemClick}>
          <Link to='/movies'>Popular Movies</Link>
        </Menu.Item>
        <Menu.Item active={activeItem === 'home'} onClick={this.handleItemClick}>
          <Link to='/tv'>Popular TV</Link>
        </Menu.Item>
        <Menu.Menu position='right search-bar'>
          <Menu.Item>
            <Search/>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}