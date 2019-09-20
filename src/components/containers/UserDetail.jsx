import React, { Component } from "react";
import { connect } from "react-redux";

class UserDetail extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>User Details</h2>
        <h3>
          <p>{this.props.user.first}</p>
          <p>{this.props.user.last}</p>
          <p>{this.props.user.age}</p>
        </h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.activeUser
});

export default connect(mapStateToProps)(UserDetail);
