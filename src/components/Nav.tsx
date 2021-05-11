import styled from 'styled-components';
import { NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


const NavWrapper = styled.div`
background:#fff;
line-height:24px;
box-shadow: 0 0 3px rgba(0,0,0,0.25);
>ul{
  display:flex;
  >li{
    width:33.3333%;
    text-align:center;
    >a{
     display:flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     padding:4px 0;
      .icon{
    width: 24px;
    height:24px;
      }
        &.selected{
        color:#f60;
        .icon{
        fill:#f60;
         }
      }
    } 
  }
}
`;
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink exact to="/tags" activeClassName="selected">
            <Icon name="tag"/>
            标签页
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money"/>
            记账页
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="chart"/>
            统计页
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;