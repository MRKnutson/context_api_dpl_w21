import React, { useState, useContext } from "react";
import { Form } from "semantic-ui-react";
import { UserContext } from "../providers/UserProvider";

const UserForm = () => {
  const user = useContext(UserContext);
  
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [avatar, setAvatar] = useState(user.avatar);
  
const handleSubmit = (e) => {
  e.preventDefault();
  const updatedUser = {firstName:firstName, lastName:lastName, email:email, avatar:avatar,};
  user.updateUser(updatedUser)
};

  return (
   <div>
     <Form onSubmit={handleSubmit}>
     <Form.Input
        label="First Name"
        type="text"
        name="firstName"
        value={firstName}
        onChange={(e)=>setFirstName(e.target.value)}
    /><Form.Input
        label="Last Name"
        type="text"
        name="lastName"
        value={lastName}
        onChange={(e)=>setLastName(e.target.value)}
    /><Form.Input
        label="Email"
        type="text"
        name="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
    /><Form.Select
        label="Avatar"
        name="avatar"
        value={avatar}
        onChange={(e,{value})=>setAvatar(value)}
        options={avatarOptions}
    />
    <Form.Button color="red">Save</Form.Button>
     </Form>
   </div>
  );
};

const avatarOptions = [
  {key: "m", text: "Yogi", value:"https://cdn-icons-png.flaticon.com/512/84/84081.png", },
  {key: "s", text: "Strawberry", value: "https://cdn-icons-png.flaticon.com/512/590/590685.png",},
  {key: "r", text: "Dog", value: "https://cdn-icons-png.flaticon.com/512/616/616554.png",},
];

export default UserForm;