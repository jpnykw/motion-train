import * as React from 'react'

const Hello = () =>
  (
    <div>
      <div>
      {
        // Group 1
        Array(8).fill().map((_, id) => (
          <div key={id} className={`object motion-g1-${id}`} />
        ))
      }
      </div>
      <div>
      {
        // Group 2
        Array(8).fill().map((_, id) => (
          <div key={id} className={`object motion-g2-${7 - id}`} />
        ))
      }
      </div>
    </div>
  )

export default Hello

