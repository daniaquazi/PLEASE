import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  position: fixed;
  background: #5a5a57;
  width: 100%;
  height: 80px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  z-index: 40;
  color: #F5F6F7;

  .logo {
    padding: 10px 0;

    a {
        color: #F5F6F7;
        text-decoration: none;
    }
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <Link to='/'>THE FRESH KID</Link>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar