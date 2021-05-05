import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import 'index.scss';
import styled from 'styled-components';

const Wrapper = styled.div`
border:1px solid red;
height:100vh;
display:flex;
flex-direction: column;
`;
const Main = styled.div`
flex-grow:1;
overflow: auto;
`;
const Nav = styled.div`
line-height:24px;
box-shadow: 0 0 3px rgba(0,0,0,0.25);
>ul{
  display:flex;
  >li{
    width:33.3333%;
    text-align:center;
    padding:16px;
  }
}
`;

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Route path="/tags">
              <Tags/>
            </Route>
            <Route path="/money">
              <Money/>
            </Route>
            <Route path="/statistics">
              <Statistics/>
            </Route>
            <Redirect exact from="/" to="/money"/>
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>
        </Main>
        <Nav>
          <ul>
            <li>
              <Link to="/tags">标签页</Link>
            </li>
            <li>
              <Link to="/money">记账页</Link>
            </li>
            <li>
              <Link to="/statistics">统计页</Link>
            </li>
          </ul>
        </Nav>


      </Wrapper>
    </Router>
  );
}

function Tags() {
  return <h2>标签</h2>;
}

function Money() {
  return <h2>记账2</h2>;
}

function Statistics() {
  return <h2>统计</h2>;
}

function NoMatch() {
  return <h2>你输错地址了,请重新输入正确的地址</h2>;
}

export default App;
