import React, { useState } from "react";
import { Form } from "semantic-ui-react";

const AccountForm = () => {
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [avatar, setAvatar] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
}


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
  {key: "m", text: "Yogi", value:"", },
  {key: "s", text: "Strawberry", value: "",},
  {key: "r", text: "Dog", value: "",},
];

export default AccountForm;