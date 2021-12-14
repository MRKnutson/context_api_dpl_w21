import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import {Card, CardContent, Image} from 'semantic-ui-react';



const User = () => {
const user = useContext(UserContext)

  return (
    <Card>
      <Image src = {user.avatar} wrapped ui = {false}/>
      <Card.Content>
    <Card.Header>Name: {user.firstName} {user.lastName}</Card.Header>
    </Card.Content>
    <CardContent>
    <Card.Meta>Email: {user.email}</Card.Meta>
    </CardContent>
    </Card>
  );
};

export default User;