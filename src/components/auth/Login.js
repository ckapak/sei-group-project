import React from 'react'
import axios from 'axios'
import Auth from '../../../lib/auth'

class Login extends React.Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    error: ''
  }

  handleChange = ({ target: { name, value } }) => {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data, error: '' })
  }

  handleSubmit = async e => {
    e.preventDefault()

    try {
      const res = await axios.post('/api/login', this.state.data)
      Auth.setToken(res.data.token)
      // this.props.history.push('/events')
    } catch (err) {
      this.setState({ error: 'Incorrect Credentials' })
    }
  }

  render() {
    return (
      <>
      <h1>Login</h1>
      <form onSubmit={this.handleSubmit}>

        <div className="row">
          <div className="five columns">
            <input type="text" 
              name="email" 
              placeholder="Email Address" 
              className="u-full-width" 
              onChange={this.handleChange}
              required={true}
            />
          </div>
        </div>

        <div className="row">
          <div className="five columns">
            <input type="text" 
              name="password" 
              placeholder="Password" 
              className="u-full-width" 
              onChange={this.handleChange}
              required={true}
            />
          </div>
        </div>

        <div className="row">
          <div className="five columns">
            <input type="submit" 
              className="button-primary u-fullwidth" 
              value="Login"
            />
          </div>
        </div>

      </form>
      </>
    )
  }
}

export default Login 