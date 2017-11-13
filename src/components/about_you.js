import React, { Component } from 'react';
import styled from 'styled-components';
import { Title } from './profile';

const Border = styled.div`
  box-shadow: 0 6px 18px 0 rgba(0,0,0,0.12);
  width: 670px;
  padding: 20px 40px;
`;

const EditIcon = styled.img`
  float: left;
`;

const AboutText = styled.div`
  margin-left: 40px;
`;

class AboutYou extends Component {
  render() {
    return (
      <div>
        <Title>About you</Title>
        <Border>
          <EditIcon src="https://static.earn.com/img/icons/icon-edit.svg" alt="Edit" title="Edit" />
          <AboutText>
            For people outside my network that want to get in touch with me, I can now be reached through Earn.com.
          </AboutText>
        </Border>
      </div>
    )
  }
}

export default AboutYou;
