import React from 'react';


class A extends React.Component {
  render() {
    return (
      <div>
        {this.props.userinfo.userid}
      </div>
    );
  }
}

export default A;
