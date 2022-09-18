import React from 'react'

function Text({content}) {
  return (
      <div className='textContainer'>
          <div className='wrapper'>
              <h3>{content}</h3>
          </div>
    </div>
  )
}

export default Text