import React from 'react';
import { connect } from 'react-redux';
import { login } from './action/userInfo';

import A from './layout/A';
import B from './layout/B';
import C from './layout/C';


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <A userinfo={ this.props.userinfo } />
        <B userinfo={ this.props.userinfo }/>
        <C login={ this.props.login } />
      </React.Fragment>
    );
  }
  componentDidMount() {
    this.props.login({
      userid: '京A',
      city: 'beijing'
    })
  }
}

const mapStateToProps = (state) => ({
  userinfo: state.userinfo
})

const mapDispatchToProps = (dispatch) => ({
  login: data => dispatch(login(data)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
