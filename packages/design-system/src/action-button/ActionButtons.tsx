import React from 'react';

import { Container } from "./ActionButtons.styles"

import { IconBaseProps } from 'react-icons/lib'; 

export type ActionButtonsProps = {
  icon: React.ComponentType<IconBaseProps>;
  text?: string;
}

const Button: React.FC<ActionButtonsProps> = ({ text, icon: Icon }) => {
  return (
    <Container>
      {Icon && <Icon size={32} color='#616F7C' />}
      {text}
    </Container>
  );
};



export default Button;
