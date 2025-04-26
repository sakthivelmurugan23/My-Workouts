import React from 'react'
import './App.css'

const App = () => {
  return (
    <div>
      <div className="flex">
  {/* First part: This can be for logo, title, etc. */}
  <div className="left-section flex-1">
    <div className="logo">Logo</div> {/* You can place your logo or other content here */}
  </div>

  {/* Second part: This will hold the navigation links and login button */}
  <div className="right-section flex-1">
    <div className="Nav">
      <div className="navinner">
        <Link to={'/'}>Home</Link>
        <Link to={'/Contact'}>Contact</Link>
        <Link to={'/Resume'}>Resume</Link>
        <Link to={'/About'}>About</Link>
        <button>Log in | Log out</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default App
