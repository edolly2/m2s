import { AiOutlineClose } from 'react-icons/ai';
import Button from './Button';
import styled from 'styled-components';
import { useState } from 'react';

const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 2;
`;
const Form = styled.form`
  max-width: 600px;
  max-height: 400px;
`;

const FormTitle = styled.h3`
  width: 100%;
  text-align: center;
`;
const FormField = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
`;
const FormLabel = styled.label`
  margin-right: 1rem;
`;
const FormInput = styled.input`
  background-color: #fa5efa;
  border: 2px solid transparent;
  border-radius: 0.4rem;
  padding: 0.5rem 0 0.5rem 1rem;
  outline: none;
  color: purple;
  /* display: flex; */
  /* align-items: center; */
  &:focus {
    border: 2px solid purple;
  }
  &:active {
    border: 2px solid purple;
  }
  &::placeholder {
    color: purple;
  }
`;
const QuestionGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: -1rem;
`;

const Question = styled.p`
  font-size: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin: 2rem 0;
`;

const CloseButton = styled.div`
  width: 100%;
  text-align: end;
  font-size: 14px;
  cursor: pointer;
`;

const SignInForm = () => {
  const [formActive, setFormActive] = useState(true);
  return (
    <FormContainer style={{ display: !formActive ? 'none' : 'flex' }}>
      <Form>
        <CloseButton>
          <AiOutlineClose onClick={() => setFormActive(false)} />
        </CloseButton>
        <FormTitle>Sign-in</FormTitle>
        <FormField>
          <FormLabel>Email</FormLabel>
          <FormInput type='email' placeholder='Example@email.com' required />
        </FormField>
        <FormField>
          <FormLabel>Password</FormLabel>
          <FormInput type='password' placeholder='Password' required />
        </FormField>
        <QuestionGroup>
          <a href='#'>
            <Question>Forgot your password?</Question>
          </a>
          <a href='#'>
            <Question>Already a member?</Question>
          </a>
        </QuestionGroup>
        <ButtonGroup>
          <Button text='Sign-in' backgroundColor='green' />
          <Button
            text='Cancel'
            backgroundColor='red'
            onClick={() => setFormActive(false)}
          />
        </ButtonGroup>
      </Form>
    </FormContainer>
  );
};

export default SignInForm;
