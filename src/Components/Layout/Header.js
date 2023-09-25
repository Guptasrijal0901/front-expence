import React, {useState, useEffect}from 'react'

const header = () => {
  return (
    <>
       <nav classname="navbar navbar-expand-lg navbar-light bg-light">
  <div classname="container-fluid">
    <button classname="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarTogglerDemo01" 
    aria-controls="navbarTogglerDemo01" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
      <span classname="navbar-toggler-icon" />
    </button>
    <div classname="collapse navbar-collapse" 
    id="navbarTogglerDemo01">
      <a classname="navbar-brand" 
      href="#">Hidden brand</a>
      <ul classname="navbar-nav me-auto mb-2 mb-lg-0">
        <li classname="nav-item">
          <a classname="nav-link active" 
          aria-current="page" 
          href="#">Expence Management</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default header