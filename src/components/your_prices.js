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

const MoneyBox = styled.div`
  margin: 30px -6px;
  max-width: 638px;
`;

const Prices = styled.span`
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 5px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  background: linear-gradient(-45deg,#a57c51,#d6a156);
  border: 1px solid transparent;
  color: #fff;
  user-select: none;
  cursor: pointer;
  letter-spacing: 2px;
  font-size: 18px;
  font-weight: 600;
  height: 48px;
  border-radius: 4px;
  padding: 10px 60px;
`;

class YourPrices extends Component {

  render() {
    return (
      <div>
        <Title>Your Prices</Title>
        <Border>
          <ReplyPrice>Reply price</ReplyPrice>
          <ReplyPriceText>How much will you charge to read and respond to a message?</ReplyPriceText>
          <MoneyBox>
            <Prices>$1</Prices>
            <Prices>$5</Prices>
            <Prices>$20</Prices>
            <Prices>$100</Prices>
          </MoneyBox>
        </Border>
      </div>
    )
  }
}

export default YourPrices;
