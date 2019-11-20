import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userinfoActions from './action/userInfo';

import A from './layout/A';
import B from './layout/B';
import C from './layout/C';


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <A userinfo={ this.props.userinfo } />
        <B userinfo={ this.props.userinfo }/>
        <C actions={ this.props.userinfoActions } />
      </React.Fragment>
    );
  }
  componentDidMount() {
    this.props.userinfoActions.login({
      userid: '京A',
      city: 'beijing'
    })
  }
}

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userinfoActions: bindActionCreators(userinfoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
