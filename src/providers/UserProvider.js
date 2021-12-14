import React from "react";

const UserContext = React.createContext();

class UserProvider extends React.Component{
  state={
    firstName: "Mr",
    lastName: "Knutson",
    email: "mrsir@gmail.com",
    avatar: "",
  };

render () {
  return (
    <UserContext.Provider value={this.state}>
      {this.props.children}
    </UserContext.Provider>
    )
  }
}

export default UserProvider;