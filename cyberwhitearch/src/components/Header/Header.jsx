<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeaderContainer,
  LeftSection,
  Nav,
  RightSection,
  NavLink,
  Dropdown,
  DropdownContent
} from './Header.styled';

const HeaderComponent = () => {
  return (
    <HeaderContainer>
      {/* Left Section */}
      <LeftSection>
        <NavLink as={Link} to="/account">Your Account</NavLink>
      </LeftSection>

      {/* Center Navigation */}
      <Nav>
        <NavLink as={Link} to="/">Home</NavLink>
        <NavLink as={Link} to="/about-us">About Us</NavLink>
        <NavLink as={Link} to="/community">Community</NavLink>
        <Dropdown>
          <NavLink as={Link} to="/tools">Tools</NavLink>
          <DropdownContent>
            <Link to="/tools/doc">Docs</Link>
            <Link to="/tools/link">Links</Link>
            <Link to="/tools/courses">Courses</Link>
          </DropdownContent>
        </Dropdown>
      </Nav>

      {/* Right Section */}
      <RightSection>
        <p>Logo</p>
        {/* <Logo /> */}
      </RightSection>
    </HeaderContainer>
  );
};

export default HeaderComponent;
=======
>>>>>>> parent of a8cc427 (home + header)
