import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Hello from './projects/Hello'

const Index = () =>
  (
    <>
      <div>イケてる css もしょーん やっていきたい</div>
      <Hello />
    </>
  )

ReactDOM.render(<Index />, document.querySelector('#root'))

