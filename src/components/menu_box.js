import React, { Component } from 'react';
import styled from 'styled-components';

const Links = styled.div`
  margin: 18px 0;
  color: #000;
  background-color: #FAFAFA;
`;

const LinksTo = styled.a`
  background-color: #FAFAFA;
  opacity: 1;
  user-select: none;
  cursor: pointer;
  text-decoration: none;
`;

class MenuBox extends Component {

  render() {
    return (
      <div>
        <Links>
          <LinksTo>Public profile</LinksTo>
        </Links>
        <Links>
          <LinksTo>Your Prices</LinksTo>
        </Links>
        <Links>
          <LinksTo>Donations</LinksTo>
        </Links>
        <Links>
          <LinksTo>Lists</LinksTo>
        </Links>
        <Links>
          <LinksTo>Account Details</LinksTo>
        </Links>
        <Links>
          <LinksTo>Linked Accounts</LinksTo>
        </Links>
      </div>
    )
  }


}

export default MenuBox;
