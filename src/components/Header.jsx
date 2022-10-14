import Accountbar from './Accountbar';
import Navbar from './Navbar';
import React from 'react';
import styled from 'styled-components';
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 3rem;
`;
const HeaderLeft = styled.div``;
const HeaderCenter = styled.div``;
const HeaderRight = styled.div``;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>LOGO</HeaderLeft>
      <HeaderCenter>
        <Navbar />
      </HeaderCenter>
      <HeaderRight>
        <Accountbar />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
