// Modified from: https://uiverse.io/andrew-demchenk0/nervous-bear-89
// 'Copy' svg from https://reactsvgicons.com
import React from 'react';
import styled from 'styled-components';

const Card = ({short, long}) => {
    

    return (
        <StyledWrapper>
        <div className="info">
            <div className="info__Links">
                <div className="info__shortLink">{short}</div>
                <div className="info__longLink">{long}</div>
            </div>
            <button 
            className="info__close" 
            onClick={() => navigator.clipboard.writeText(short)}
            aria-label="Copy text"
            >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="2em" height="2em">
                <path
                fill="currentColor"
                d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
                ></path>
            </svg>
            </button>
        </div>
        </StyledWrapper>
    );
    }

    const StyledWrapper = styled.div`
    .info {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        width: 320px;
        padding: 12px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        background: #f5f5f5;
        border-radius: 8px;
        box-shadow: 0px 0px 5px -3px #111;
    }

    .info__shortLink {
        font-weight: 500;
        font-size: 14px;
        color: #000000ff;
    }

    .info__longLink {
        font-weight: 500;
        font-size: 14px;
        color: #979797ff;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 275px;
    }

    .info__close {
        width: 20px;
        height: 20px;
        cursor: pointer;
        margin-left: auto;
        /* Reset default button styles */
        background: none;
        border: none;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .info__close path {
        fill: #000000ff;
        transition: fill 0.2s;
    }
    
    .info__close:active path {
        fill: #f5f5f5;
    }
`;

export default Card;