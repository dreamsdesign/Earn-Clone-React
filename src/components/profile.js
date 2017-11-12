import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h3`
  font-size: 16px;
  color: #858585;
`

const ProfileHead = styled.div`
  display: table;
  table-layout: fixed;
  width: 100%;
`;

const ProfileImg = styled.img`
  width: 238px;
  height: 238px;
`;

const EditImg = styled.div`
  user-select: none;
  cursor: pointer;
  position: relative;
  bottom: 68px;
  left: 0px;
  text-align: center;
  padding: 20px 0;
  width: 238px;
  background: rgba(0,0,0,0.7);
  color: #fff;
`;

class Profile extends Component {
  render() {
    return (
      <div>
        <Title>Profile</Title>
        <ProfileHead>
          <ProfileImg src="https://s3.amazonaws.com/userimages.21.co/14519669_10104818670757003_6339984358298392224_n.jpg" alt="Joe Fiume" />
          <EditImg>
            Upload New Image
          </EditImg>
        </ProfileHead>
      </div>
    )
  }
}

export default Profile;
