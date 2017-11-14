import React, { Component } from 'react';
import styled from 'styled-components';
import { Title } from './profile';
import Switch from 'react-toggle-switch';
import Toggle from 'react-toggle';
import "react-toggle/style.css" // for ES6 modules

const Border = styled.div`
  box-shadow: 0 6px 18px 0 rgba(0,0,0,0.12);
  width: 670px;
  padding: 20px 40px;
`;

const Row1 = styled.div`
  padding-bottom: 30px;
  border-bottom: 1px solid #F1F1F1;
`;

const Rows = Row1.extend`
  padding-top: 30px;
`;

const RowText = styled.h4`
  font-size: 16px;
  color: #000;
  font-weight: 400;
  margin: 0;
`;

const ActionLink = styled.span`
  opacity: .85;
  cursor: pointer;
  font-weight: 600;
  float: right;
  top: 0px;
`;

const ToggleDiv = styled.div`
  float: right;
`;


class PublicProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switched: false
    };
  }

  toggleSwitch = () => {
      this.setState(prevState => {
        return {
          switched: !prevState.switched
        };
      });
    };

  render() {
    return (
      <div>
        <Title>Public Profile</Title>
        <Border>
          <Row1>
            <ActionLink>earn.com/joefiume</ActionLink>
            <RowText>Your Profile url</RowText>
          </Row1>
          <Rows>
            <ToggleDiv>
              <Toggle onChange={this.toggleSwitch} icons={false}/>
            </ToggleDiv>
            <RowText>Accept paid messages</RowText>
          </Rows>
        </Border>
      </div>
    )
  }
}

export default PublicProfile;
