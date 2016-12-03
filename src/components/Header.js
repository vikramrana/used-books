import React, { Component } from 'react'
import { Label, Button, Icon, Menu } from 'semantic-ui-react'
import PostBookModal from './PostBookModal'
import base from '../base'

class Header extends Component {

  constructor(){
    super()
    this.renderLogin = this.renderLogin.bind(this)
    this.authenticate = this.authenticate.bind(this)
    this.authHandler = this.authHandler.bind(this)
    this.logout = this.logout.bind(this)

    this.state = {
      uid: null,
      userImage: null,
      username: null
    }
  }

  componentDidMount() {
    base.onAuth((user) => {
      if(user) {
        this.authHandler(null, { user })
      }
    })
  }

  authenticate(provider) {
    console.log(`trying to log in with ${provider}`)
    base.authWithOAuthPopup(provider, this.authHandler)
  }

  logout() {
    base.unauth();
    this.setState({ uid: null })
  }

  authHandler(err, authData) {
    console.log(authData)
    if (err) {
      console.error(err)
      return
    }

    this.setState({
      uid: authData.user.uid,
      userImage: authData.user.photoURL,
      username: authData.user.displayName
    })
    // const storeRef = base.database().ref()
  }

  renderLogin(){

      if(!this.state.uid) {
        return (
          <Button onClick={() => this.authenticate('facebook')} color='facebook'>
          <Icon name='facebook' /> Facebook Login
          </Button>
        )
      }
      else
        return (
          <Label onClick={this.logout} size='large' as='a' image>
            <img src={this.state.userImage} role="presentation"/>
            Logout
          </Label>

        )

  }
  render() {

    return (
      <Menu inverted className='App-header'>
        <Menu.Item>
          <h2 className="logo">Used Books</h2>
        </Menu.Item>
        <Menu.Item position='right'>
          <PostBookModal uid={this.state.uid}
                         userImage={this.state.userImage}
                         username={this.state.username}
                         addBook={this.props.addBook}/>
        </Menu.Item>

        <Menu.Item >
          {this.renderLogin()}
        </Menu.Item>
      </Menu>
    )
  }
}

export default Header
