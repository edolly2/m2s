import { BiSearch, BiUserCircle } from 'react-icons/bi';

import { HiOutlineShoppingCart } from 'react-icons/hi';
import React from 'react';
import styled from 'styled-components';

const AccountbarContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const AccountbarIcon = styled.div``;
const Accountbar = () => {
  return (
    <AccountbarContainer>
      <AccountbarIcon tooltip='Search'>
        <BiSearch />
      </AccountbarIcon>
      <AccountbarIcon>
        <BiUserCircle tooltip='User Account' />
      </AccountbarIcon>
      <AccountbarIcon>
        <HiOutlineShoppingCart />
      </AccountbarIcon>
    </AccountbarContainer>
  );
};

export default Accountbar;
