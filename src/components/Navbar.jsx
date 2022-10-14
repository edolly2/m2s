import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import React, { useState } from 'react';

import styled from 'styled-components';

const NavContainer = styled.div``;
const Nav = styled.nav`
  display: flex;
  gap: 30px;
  align-items: center;
`;
const NavList = styled.ul`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const NavSubList = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  /* margin-left: 20px; */
  left: 10px;
`;
const NavListItem = styled.li`
  position: relative;
  white-space: nowrap;
  /* display: flex; */
  /* align-items: center; */
`;

const Navbar = () => {
  const [subMenuActive, setSubMenuActive] = useState(false);
  return (
    <NavContainer>
      <Nav>
        <NavList>
          <NavListItem>Home</NavListItem>
          <NavListItem>Meet The Maker</NavListItem>
          <NavListItem>
            <NavListItem
              style={{ display: 'flex', alignItems: 'center' }}
              onClick={() => {
                setSubMenuActive(!subMenuActive);
              }}
            >
              Shop Online{' '}
              {subMenuActive ? <MdArrowDropUp /> : <MdArrowDropDown />}
            </NavListItem>
            {subMenuActive ? (
              <NavSubList>
                <NavListItem>Collections</NavListItem>
                <NavListItem>Our Favorites</NavListItem>
                <NavListItem>Seasonal</NavListItem>
                <NavListItem>Melts</NavListItem>
                <NavListItem>Sprays</NavListItem>
                <NavListItem>Magnets</NavListItem>
                <NavListItem>Gift Boxes</NavListItem>
                <NavListItem>Custom Candles</NavListItem>
              </NavSubList>
            ) : null}
          </NavListItem>
          <NavListItem>Event Calendar</NavListItem>
          <NavListItem>Contact</NavListItem>
          <NavListItem>Join Now</NavListItem>
        </NavList>
      </Nav>
    </NavContainer>
  );
};

export default Navbar;
