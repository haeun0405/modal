import React from 'react';
import { ButtonWrapper, StyledButton, Icon } from './Button.style';

const Button = ({ size, variant, label, hasIcon, onClick, color, textColor }) => {
  return (
    <StyledButton size={size} variant={variant} onClick={onClick} color={color} textColor={textColor}>
      {hasIcon && <Icon />}
      {label}
    </StyledButton>
  );
};

const ButtonGroup = ({ children }) => {
  return <ButtonWrapper>{children}</ButtonWrapper>;
};

export { Button, ButtonGroup };