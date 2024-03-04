import React from 'react'

function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img
        src= {require('../../components/NavBar/blockchain.jpg')}
        width={30}
        height={30}
        className="d-inline-block align-text-top"
      />
      Certificate Verification System
    </a>
  </div>
</nav>
  )
}

export default Navbar