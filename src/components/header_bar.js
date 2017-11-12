import React, { Component } from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.09);
  padding: 1.5%;
  width: 98%;
  position: fixed;
  background-color: white;
`;

const Logo = styled.img`
  width: 3.75em;
  float: left;
  position: absolute;
  left: 14px;
  top: 10px;
`;

const Links = styled.span`
  margin: 1.5em;
  color: #d6a156;
  font-weight: 600px;
  cursor: pointer;
  letter-spacing: 2px;
  border-bottom: 5px solid transparent;
`;

const ThreeLinks = styled.div`
  margin-top: 14px;
  margin-left: 150px;
`;

const MailBox = styled.img`
  float: left;
  position: absolute;
  right: 300px;
  top: 25px;
  opacity: 0.9;
`;

const Pipe1 = MailBox.extend`
  right: 340px;
  top: 6px;
  height: 60px;
`;

const SearchIcon = MailBox.extend`
  right: 240px;
  top: 25px;
`;

const Pipe2 = Pipe1.extend`
  right: 210px;
`;

const AmtBtc = styled.span`
  float: left;
  position: absolute;
  display: block;
  letter-spacing: 3px;
  line-height: 20px;
  font-size: 20px;
  margin-bottom: 4px;
  right: 110px;
  color: #d6a156;
`;

const AmtUsd = AmtBtc.extend`
  top: 40px;
  right: 160px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 2px;
`;

const Pipe3 = Pipe1.extend`
  right: 80px;
`;

const MenuToggler = MailBox.extend`
  right: 30px;
  top: 20px;
  width: 36px;
  height: 36px;
  margin-left: 20px;
  border-radius: 100%;
  cursor: pointer;
`;

const DropDownContent = styled.div`
  visibility: hidden;
  float: left;
  position: absolute;
  display: block;
  letter-spacing: 3px;
  line-height: 20px;
  font-size: 20px;
  margin-bottom: 4px;
  top: 100px;
  right: 20px;
  color: #d6a156;
  font-weight: 600;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
`;

class HeaderBar extends Component {
  render() {
    return (
      <NavBar>
          <Logo alt="Earn.com" src="https://static.earn.com/img/icons/wordmark-square-gold.svg" />
          <Pipe1 src="https://res.cloudinary.com/pancake/image/upload/v1510368906/Pipe.png" />
          <Pipe2 src="https://res.cloudinary.com/pancake/image/upload/v1510368906/Pipe.png" />
          <Pipe3 src="https://res.cloudinary.com/pancake/image/upload/v1510368906/Pipe.png" />
          <MailBox alt="Messages" src="https://static.earn.com/img/icons/menu_icons/icon-nav-inbox-gold.svg" />
          <SearchIcon alt="Search" src="https://static.earn.com/img/icons/menu_icons/icon-nav-search-gold.svg" />
          <MenuToggler src="https://s3.amazonaws.com/userimages.21.co/14519669_10104818670757003_6339984358298392224_n.jpg" alt="Joe Fiume" />
          <DropDownContent>
            <div>Profile</div>
            <div>Payments</div>
            <div>Cash Out</div>
            <div>Log Out</div>
          </DropDownContent>
          <AmtBtc>
            0.0000
            <img src="https://static.earn.com/img/icons/icon-bitcoin-gold-small.svg" alt="bitcoin"/>
          </AmtBtc>
          <AmtUsd>
            $0.00
          </AmtUsd>
          <ThreeLinks>
            <Links>Business</Links>
            <Links>Lists</Links>
            <Links>Community</Links>
          </ThreeLinks>
      </NavBar>
    )
  }
}

export default HeaderBar;
