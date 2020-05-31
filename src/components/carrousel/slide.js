/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

const Slide = ({ content, width }) => (
  <div
    css={css`
      min-height: 100%;
      width: ${width}px;
      background-image: url('${content}');
      background-size: cover;
      background-position: center center;
      
      background-repeat: no-repeat;
      
    `}
  />
);

export default Slide;
