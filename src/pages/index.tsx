import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Hello from './projects/Hello'

const Index = () =>
  (
    <div>
      <h2>イケてる css もしょーん やっていきたい</h2>
    </div>
  )

const Main = () =>
  (
    <>
      <Router>
        <Link to="/"><button className={'route-btn'}>Top</button></Link>
        <Link to="/hello"><button className={'route-btn'}>Hello</button></Link>
        <Route exact path="/" component={Index}></Route>
        <Route exact path="/hello" component={Hello}></Route>
      </Router>
    </>
  )

ReactDOM.render(<Main />, document.querySelector('#root'))

