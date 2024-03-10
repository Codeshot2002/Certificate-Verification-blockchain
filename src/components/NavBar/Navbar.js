import React from 'react'
import { Link } from "react-router-dom"
function Navbar() {


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={require('../../components/NavBar/blockchain.jpg')}
              width={30}
              height={30}
              className="d-inline-block align-text-top"
            />
            Certificate Verification via BlockChain
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
              <li className="nav-item">

                <Link className="nav-link active" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active"  to="/signup">signup</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

