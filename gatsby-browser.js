import React from "react"
import { silentAuth } from "./src/utils/auth"
import AppContainer from './src/components/ReactWrapper';
import "./node_modules/bootstrap/dist/css/bootstrap.css"

class SessionCheck extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  handleCheckSession = () => {
    this.setState({ loading: false })
  }

  componentDidMount() {
    silentAuth(this.handleCheckSession)
  }

  render() {
    return (
      this.state.loading === false && (
        <React.Fragment>{this.props.children}</React.Fragment>
      )
    )
  }
}

//Contain app state and app logic away from autentication dependencies. Also, using context to distribute props to child com
export const wrapRootElement = ({ element }) => {
  return <SessionCheck><AppContainer>{element}</AppContainer></SessionCheck>    
}
