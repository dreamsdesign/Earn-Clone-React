import React, { Component } from 'react';
import styled from 'styled-components';
import { Title } from './profile';
import { Border } from './public_profile';

const ReplyPrice = styled.h4`
  font-size: 16px;
  color: #000;
  font-weight: 400;
  margin: 0;
`;

const ReplyPriceText = styled.p`
  color: #858585;
  margin-top: 12px;
`;

class YourPrices extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Title>Your Prices</Title>
        <Border>
          <ReplyPrice>Reply price</ReplyPrice>
          <ReplyPriceText>How much will you charge to read and respond to a message?</ReplyPriceText>
        </Border>
      </div>
    )
  }
}

export default YourPrices;
