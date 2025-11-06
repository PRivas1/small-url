// Modified from: https://uiverse.io/alexruix/evil-parrot-25
import React from 'react';
import styled from 'styled-components';

const Input = ({onTextChange}) => {
  return (
    <StyledWrapper>
      <input 
      className="input" 
      name="text" 
      placeholder="Search..." 
      type="search" 
      onChange={e => onTextChange(e.target.value)}/>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
    max-width: 700px;
    width: 100%;

  .input {
    width: 100%;
    background-color: #f5f5f5;
    color: #242424;
    padding: 1rem;
    min-height: 40px;
    border-radius: 4px;
    outline: none;
    border: none;
    line-height: 1.15;
    box-shadow: 0px 10px 20px -18px;
    font-size: 1.1rem;
  }

  input:focus {
    border-bottom: 2px solid #242424;
    border-radius: 4px 4px 2px 2px;
  }

  input:hover {
    outline: 1px solid lightgrey;
  }`;

export default Input;
