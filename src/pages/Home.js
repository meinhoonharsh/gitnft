import React from "react";
import { useState } from "react";
import Card from "../components/Card";
import logo from '../img/logo.png';
export default function Test() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState("");

  function search() {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }
  return (
    <>
      {/* <div> */}


      {/* Menu */}
      <div className="menu">
        <div className="container flex">
          {/* Mobile Button */}
          <div className="mobile-btn">
            <ion-icon name="grid" />
          </div>
          <div className="logo">
            <img
              src={logo}
              alt="LOGO"
            />
          </div>

          <a href="#" className="btn">
            Connect Wallet
          </a>
        </div>
      </div>
      {/* End Menu */}
      {/* Header */}
      <header className="header">
        <div className="container flex">
          <div className="text">
            <h1 className="mb">
              Get Your First <br />
              <span>NFT</span> By Us
            </h1>
            <p className="mb">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sunt
              sed tempora neque molestiae corrupti nobis harum ullam eos nam!
            </p>
            {/* sir ka likha coad starts*/}
            <input className="search" value={username} onChange={(e) => setUsername(e.target.value)} />
            <button className="search-btn" onClick={search}>Search for User</button>

            {userData && <Card data={userData} username={username} />}
            {/* sir ka likha coad end */}
            {/* search option ka alt*/}
            {/* <a href="#" className="btn">
              Connect Wallet
            </a> */}
            {/* search option ka alt khatam */}
          </div>
          <div className="visual">
            <img
              src="https://github.githubassets.com/images/modules/site/home-campaign/astrocat.png?width=480&format=webpll"
              alt=""
            />
          </div>
        </div>
      </header>
      {/* End Header */}

      {/* </div> */}
    </>
  );
}
