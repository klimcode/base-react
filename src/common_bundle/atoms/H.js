// import React from 'react';
import styled from 'styled-components';
import getBaselineStyles from './baseline';


export const H1 = styled.h1`
  ${getBaselineStyles}
  font-weight: bold;
  color: ${props => props.color || props.theme.color};
`;
H1.defaultProps = {
  component: 'h1',
  fontSizeDef: 56,
};

export const H2 = H1.extend`
  font-weight: normal;
`;
H2.defaultProps = {
  fs: 40,
};

export const H3 = H1.extend`
  font-weight: normal;
`;
H3.defaultProps = {
  fs: 32,
};
