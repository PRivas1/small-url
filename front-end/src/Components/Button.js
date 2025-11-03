// Modified from: https://uiverse.io/adamgiebl/massive-insect-65
import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button className="button" role="button">Generate</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    align-items: center;
    appearance: none;
    background-color: #f5f5f5;
    border-radius: 8px;
    border-width: 2px;
    border-color: #242424;
    box-shadow: 0px 10px 20px -18px;
    box-sizing: border-box;
    color: #242424;
    cursor: pointer;
    display: inline-flex;
    height: 56px;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    padding-left: 24px;
    padding-right: 24px;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: box-shadow 0.15s, transform 0.15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    will-change: box-shadow, transform;
    font-size: 20px;
  }

  .button:focus {
    outline: none;
    border-bottom: 2px solid #242424;
  }

  .button:hover {
    border-bottom: 2px solid #242424;
    transform: translateY(-2px);
  }

  .button:active {
    border-bottom: 2px solid #242424;
    transform: translateY(2px);
  }`;

export default Button;
