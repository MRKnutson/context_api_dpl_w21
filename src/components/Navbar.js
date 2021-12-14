import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { UserContext } from '../providers/UserProvider';

const Navbar = () => {

  const user = useContext(UserContext);

  return(
    <Menu>
      <NavLink to="/">
        <Menu.Item>
          Home
        </Menu.Item>
      </NavLink>
      <NavLink to="/userprofile">
        <Menu.Item>
          {user.firstName} {user.lastName}
        </Menu.Item>
      </NavLink>
    </Menu> 
  )
};

export default Navbar;