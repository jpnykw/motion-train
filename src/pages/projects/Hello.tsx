import * as React from 'react'

const Hello = () =>
  (
    <>
      {
        Array(10).fill().map((_, id) => (
          <div className={`object motion-${id}`}></div>
        ))
      }
    </>
  )

export default Hello

