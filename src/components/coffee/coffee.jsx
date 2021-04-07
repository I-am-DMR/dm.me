import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
  line-height: 2;
  height: 3rem;
  text-decoration: none;
  display:inline-flex;
  color: #FFFFFF;
  background-color: #FF813F;
  border-radius: 5px;
  border: 1px solid transparent;
  padding: 0.3rem 1rem 0.3rem 1rem;
  font-size: 1rem;
  letter-spacing: 0.1px;
  box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5);
  transition: 0.3s all linear;
  font-family: Fredoka One;
  &:hover, &:active, &:focus {
    text-decoration: none;
    box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
    opacity: 0.85;
    color:#FFFFFF;
  }
`;

const Image = styled.img`
  height: 34px;
  width: 35px;
  margin-bottom: 1px;
  box-shadow: none;
  border: none;
  vertical-align: middle;
`;

const Text = styled.span`
  margin-left: 10px;
  font-size: 0.7rem;
  text-align: center;
  vertical-align: middle;
`;
const Text2 = styled.span`
  margin-left: 19px;
  font-size: 0.7rem;
`

function Coffee() {
  return (
    <Button target="_blank" href="https://www.buymeacoffee.com/devamakesh">
      <Image src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee" />
      <Text>Buy me a coffee</Text>
    </Button>
  );
}

export default Coffee;