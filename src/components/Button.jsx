import React from 'react';
import styled from 'styled-components';
const CustomButton = styled.button`
  width: 10rem;
  max-width: 8rem;
  max-height: 3rem;
  height: 3rem;
  padding: 0.5rem 1rem;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  cursor: pointer;
`;
const Button = (props) => {
  return (
    <CustomButton className={props.backgroundColor} onClick={props.onClick}>
      {props.text}
    </CustomButton>
  );
};

export default Button;
