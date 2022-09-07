import React, { useEffect, useState } from 'react';
import './Navbar.css';

export default function Navbar() {

  let data
  const APIurl = 'https://backend-ohlocal-development.umnsbhcb5nb6a.ap-south-1.cs.amazonlightsail.com/api/test_web_assignment/'
  const [ShowData, SetShowData] = useState()
  function JSONdata() {
    fetch(APIurl)
      .then(response => response.json())
      .then(responseData => {
        data = [responseData].map(function(object){
          return (
            <img key={object.id} src={object.nav_bar.person_icon} />
          )
        })
        console.log(ShowData)
        SetShowData(data)
      })
  }

  useEffect(() => {
    JSONdata()
  }, [])
  return (
    <div>
      <nav>
        <div className="menu-icon">
          <span className="fas fa-bars" />
        </div>
        <form action="#">
          <input type="search" className="search-data" placeholder="Enter here" required />
          <button type="submit" className="search">Search</button>
        </form>
        <div className="nav-items">
          <li><a href="#">Live Bids</a></li>
          <li><a href="#">{ShowData}</a></li>
          <li><a href="#">Help & Support</a></li>
        </div>
        <div className="search-icon">
          <span className="fas fa-search" />
        </div>
        <div className="cancel-icon">
          <span className="fas fa-times" />
        </div>

      </nav>
    </div>
  )
}
