import React, { Component } from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Ax from '../Ax/Ax'

const withErrorHandler = (WrapperComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    }
    componentDidMount() {
      axios.interceptors.request.use((req) => {
        this.setState({ error: null })
        return req
      })
      axios.interceptors.response.use(
        (res) => res,
        null,
        (error) => {
          this.setState({ error: error })
        },
      )
    }
    errorConfirmedHandler = () => {
      this.setState({ error: null })
    }
    render() {
      return (
        <Ax>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrapperComponent {...this.props} />
        </Ax>
      )
    }
  }
}

export default withErrorHandler
