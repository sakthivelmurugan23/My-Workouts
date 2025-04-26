import React from 'react'

const Resume = () => {
  return (
    <div>
      <h1 style={{ color: 'blue' }}>RESUME:  </h1>

      <img src='public/resume.jpg' style={{ width: '800px', marginTop: '10px', marginLeft: '3px' }}></img>
      <button style={{
        width: '200px',
        height: '50px',
        background: 'rgb(42, 112, 165)',
         color: 'white',
        fontFamily: 'Times new romen',
        display:'flex',
        marginLeft:'60%',
        marginTop:'-1000px'
      }}>Download CV </button>
    </div>
  )
}

export default Resume