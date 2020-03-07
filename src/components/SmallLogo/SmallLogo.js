import React from 'react';
import styled from 'styled-components';
import logo from '../../images/smalllogo.png';

export const SmallLogo = () => {
  return (
    <StyledSmallLogo>
      <img src={logo} alt="Logo" />
    </StyledSmallLogo>
  );
};

const StyledSmallLogo = styled.div`
  margin: 121px auto 0 auto;
`;