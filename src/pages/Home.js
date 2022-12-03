import React from "react";
import { useState } from "react";
import Card from "../components/Card";
import logo from '../img/logo.png';
import { ConnectButton } from '@rainbow-me/rainbowkit';

import "./Index.scss";
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
      <div className="container-relative">
        <div className="row-absolut">


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

          <a href="#" className="btn" >
            Connect Wallet
          </a>
          <ConnectButton />
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
              Hey Anon 👋! <br />
              Introducing GitNFT based on your github stats. <br />
              Get Your First NFT and show it off to the World.
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
      
      {/* Explore */}
      <div className="section" id="explore">
          <div className="container flex">
            <div className="visual">
              
            </div>
            <div className="text">
              <h2 className="primary mb">
                What It's 
                About
              </h2>
              <p className="tertiary mb">
                The main thing we want from you is to have fun using this Website.
              </p>
              <a href="#" className="btn mt">Get Started Now</a>
            </div>
          </div>
        </div>
        {/* End Explore */}
        {/* Trainer */}
        <div className="section" id="trainer">
          <h2 className="primary mb">Our Team</h2>
          <div className="container flex">
            <div className="trainer">
              
              <h3 className="secondary mb">Divyanshu Urmaliya</h3>
              <p className="tertiary mb">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.
              </p>
              <a href="#" className="btn-2">
                <ion-icon name="arrow-redo-circle-outline" />
              </a>
            </div>
            <div className="trainer">
              <h3 className="secondary mb">Sumit Choudhary</h3>
              <p className="tertiary mb">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.
              </p>
              <a href="#" className="btn-2">
                <ion-icon name="arrow-redo-circle-outline" />
              </a>
            </div>
            <div className="trainer">
              <h3 className="secondary mb">Nikhil Sondhiya</h3>
              <p className="tertiary mb">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.
              </p>
              <a href="#" className="btn-2">
                <ion-icon name="arrow-redo-circle-outline" />
              </a>
            </div>
            <div className="trainer">
              <h3 className="secondary mb">Aman Singh</h3>
              <p className="tertiary mb">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.
              </p>
              <a href="#" className="btn-2">
                <ion-icon name="arrow-redo-circle-outline" />
              </a>
            </div>
            <div className="trainer">
              <h3 className="secondary mb">Abhineet Baghel</h3>
              <p className="tertiary mb">
                The Last One
              </p>
              <a href="#" className="btn-2">
                <ion-icon name="arrow-redo-circle-outline" />
              </a>
            </div>
          </div>
        </div>
        {/* End Trainer */}

      </div>
      </div>
    </>
  );
}
