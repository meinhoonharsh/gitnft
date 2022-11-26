import React from "react";
import ConnectButton from "../components/ConnectButton";
import "./Index.scss";

export default function Index() {
  const ConnectWallet = () => {
    alert("Arre bhai, yeh Functionality banana baki hai");
  };
  return (
    <div className="index-page">
      <div className="container">
        <ConnectButton onClick={ConnectWallet} />
        <a href="/home">Go to Home Page</a>
      </div>
    </div>
  );
}
