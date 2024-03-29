import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';


const NavItems = styled.ul`
  // background-color: black;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: right;
  align-items: center;
  grid-gap: 5vw;
  font-size: 1rem;
  white-space: nowrap;
  margin: 0;
  padding-right: 1.5rem;
  .navItem {
      margin: 0;

      a {
        color: #F5F6F7;
        text-decoration: none;
      }
  }  

  @media (max-width: 768px) {
    li {
        padding: 30px 30px;
    }
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    background-color: #5a5a57;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 80px;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    .navItem {
      color: #F5F6F7;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <NavItems open={open}>
        <li className="navItem"><Link to="/">HOME</Link></li>
        <li className="navItem"><Link to="/aboutUs/">ABOUT US</Link></li>  
        <li className="navItem"><Link to="/reports/">REPORTS</Link></li>  
        <li className="navItem"><Link to="/blogs/">BLOGS</Link></li>
    </NavItems>
  )
}

export default RightNav