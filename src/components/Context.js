import React from "react";
import { Container } from "semantic-ui-react";
import User from "./User";
import UserForm from "./UserForm";

const Context = () => {
  return (
    <Container>
      <h1>User Profile</h1>
      <User/>
      <UserForm/>
    </Container>
  );
};

export default Context;