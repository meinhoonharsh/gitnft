import React from "react";
import "./Index.scss";

export default function Index() {
  return (
    <div className="index-page">
      <div className="container">
        <button className=" button connect-wallet-button">
          Connect Wallet
        </button>
        <a href="/home">Go to Home Page</a>
      </div>
    </div>
  );
}
