import React from 'react';
import {
 HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <nav>
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
        </nav>

        <Switch>
          <Route path="/tags">
            <Tags />
          </Route>
          <Route path="/money">
            <Money />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Redirect exact from="/" to="/money"/>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
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
