import React from 'react';
import styled from 'styled-components';


export const H1 = styled.h1`
    text-align: center;
    `;

export const Paper = styled.div`
    height: ${props => props.height || "250px"};
    width: ${props => props.width || "250px"};
    padding: 20px;      
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
    `;

    export const ULHover = styled.ul`
        li:hover{
            background-color: #f1efef;
        }
        li:hover .button{
            display: inline-block;
            padding: 0px 3px 3px 3px;
            margin: 0px;
        }

    `;


    export const SpanBadge = styled.span`
      background-color: #f7f4f4;
      padding: 3px;
      margin: 2px;
      border-radius: 6px;

      :hover{
          background-color: yellow;
      }
    `;
