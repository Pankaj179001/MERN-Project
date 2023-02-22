import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function Navbar() {
  const navigate=useNavigate()
  const handleLogout=(e)=>{
 localStorage.clear()
 return navigate("/createuser")
  }
  return (<>
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success ">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" style={{fontFamily:"revert"}} to="#">Go Food</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex" id="navbarNav">
            <ul className="navbar-nav d-flex me-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link active fs-4" aria-current="page" to="/">Home</Link>
              </li>
             
            </ul>
            <div >
              {(!localStorage.getItem("user")?<div> <Link className="btn bg-white text-success mx-2" to="/login">Login</Link>
                <Link className="btn bg-white text-success mx-2" to="/createuser">SignUp</Link>
                </div>: <div>
                  <Link className="btn bg-white text-success mx-2" to="/">My Cart</Link>
                  <button className="btn bg-white text-danger mx-2" onClick={handleLogout}>Logout</button>
                  </div>
                ) }
               
            </div>
          </div>
        </div>
      </nav>
    </div>
  </>
  )
}
