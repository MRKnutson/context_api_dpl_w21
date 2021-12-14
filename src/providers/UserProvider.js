import React from "react";
export const UserContext = React.createContext();

class UserProvider extends React.Component{
  state={
    firstName: "Mr.",
    lastName: "Knutson",
    email: "mrsir@gmail.com",
    avatar: "https://cdn-icons-png.flaticon.com/512/84/84081.png",
    updateUser: (user) => this.updateUser(user),
  };


  updateUser = (user) => {
    this.setState({...user,});
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


//this is how to do it as a functional component
// import React, {useState} from "react"

// export const UserContext = React.createContext();

// const UserProvider = (props) => {
//   const [state, setState] = useState({
//     email: "BobRoss@gmail.com",
//     firstName: "Bob",
//     lastName: "Ross",
//     avatar:"https://yt3.ggpht.com/ytc/AKedOLT2y4hkt_FsZMoIkho6Vn8jFfGacOYxi2XkvuXL=s900-c-k-c0x00ffffff-no-rj",
//     updateUser: (user) => setState({...state, ...user})
//   })

//   return ( 
//     <UserContext.Provider value = {state}>
//       {props.children}
//     </UserContext.Provider>
//   )
// }

// export default UserProvider