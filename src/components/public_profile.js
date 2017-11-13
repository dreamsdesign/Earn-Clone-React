import React, { Component } from 'react';
import styled from 'styled-components';
import { Title } from './profile';

const Border = styled.div`
  box-shadow: 0 6px 18px 0 rgba(0,0,0,0.12);
  width: 670px;
  padding: 20px 40px;
`;

class PublicProfile extends Component {
  render() {
    return (
      <div>
        <Title>Public Profile</Title>
        <Border>
          
        </Border>
      </div>
    )
  }
}

export default PublicProfile;
