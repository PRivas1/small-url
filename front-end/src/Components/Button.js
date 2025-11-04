// Modified from: https://uiverse.io/ke1221/ancient-walrus-24
import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button>Create</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    color: #090909;
    padding: .85em 1.5em;
    font-size: 18px;
    border-radius: 0.5em;
    background: #f5f5f5;
    cursor: pointer;
    border: 1px solid #e8e8e8;
    transition: all 0.3s;
    box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
  }

  button:active {
    color: #666;
    box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
  }`;

export default Button;
