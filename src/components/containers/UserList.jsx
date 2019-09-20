import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import uuid from "uuid";
import { selectUser } from "../../actions/userAction";

class UserList extends Component {
  createListItems = () => {
    return this.props.users.map(user => (
      <li key={uuid.v4()} onClick={() => this.props.selectUser(user)}>
        {`${user.first} ${user.last}`}
      </li>
    ));
  };

  render() {
    console.log(this.props);
    console.log(this.props.users);
    return (
      <React.Fragment>
        <h1>Users List</h1>
        {this.createListItems()}
        <hr />
      </React.Fragment>
    );
  }
}

// **** Make state from store available as props ****
// map the part of state needed from store to local props
// must match state[key in rootReducer][state property in rootReducer key.value]
const mapStateToProps = state => ({
  users: [...state.users]
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectUser: selectUser }, dispatch);
};

// connect links your component to the store which was passed as props from Provider which wraps App. It takes two arguments The first argument maps state to local props, and the imported action. The second argument is the component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
