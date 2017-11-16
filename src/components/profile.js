import React, { Component } from 'react';
import styled from 'styled-components';
import { Border } from './public_profile';

export const Title = styled.h3`
  font-size: 16px;
  color: #858585;
`

const ProfileBorder = Border.extend`
  padding: 0px;
  height: 238px;
  width: 750px;
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
  padding: 20px 0px;
  width: 238px;
  background: rgba(0,0,0,0.7);
  color: #fff;
`;

export const EditIcon = styled.img`
  user-select: none;
  cursor: pointer;
  opacity: .85;
  width: 16px;
  height: 16px;
`;

const ProfileInfo = styled.div`
  position: relative;
  top: -250px;
  left: 300px;
`;

const FullName = styled.h1`
  position: relative;
  left: 40px;
  top: -60px;
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 30px;
  letter-spacing: 2px;
  color: #000;
  font-weight: 600;
`;

const EditName = styled.div`
  display: block;
  position: relative;
`;

const EditTitle = styled.div`
  display: block;
  position: relative;
  top: -80px;
`;

const EditTitleText = EditTitle.extend`
  top: -22px;
  left: 40px;
`;

const EditCompany = EditTitle.extend`
  top: -90px;
`;

const EditCompanyText = EditTitleText.extend`

`;

class Profile extends Component {

  render() {
    return (
      <div>
        <Title>Profile</Title>
        <ProfileBorder>
            <ProfileImg src="https://s3.amazonaws.com/userimages.21.co/14519669_10104818670757003_6339984358298392224_n.jpg" alt="Joe Fiume" />
            <EditImg>Upload New Image</EditImg>
            <ProfileInfo>
              <EditName>
                <EditIcon src="https://static.earn.com/img/icons/icon-edit.svg" alt="Edit" title="Edit" />
                <FullName>Joe Fiume</FullName>
              </EditName>
              <EditTitle>
                <EditIcon src="https://static.earn.com/img/icons/icon-edit.svg" alt="Edit" title="Edit" />
                <EditTitleText>Edit your title</EditTitleText>
              </EditTitle>
              <EditCompany>
                <EditIcon src="https://static.earn.com/img/icons/icon-edit.svg" alt="Edit" title="Edit" />
                <EditCompanyText>Edit your company url</EditCompanyText>
              </EditCompany>
            </ProfileInfo>
        </ProfileBorder>
      </div>
    )
  }
}

export default Profile;
