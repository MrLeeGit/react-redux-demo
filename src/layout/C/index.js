import React from 'react';


class C extends React.Component {
  changeUserInfo = () => {
    const actions = this.props.actions;

    actions.login({
      userid: '冀H',
      city: 'chengde'
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.changeUserInfo}>修改</button>
      </div>
    );
  }
}

export default C;
