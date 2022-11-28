import React from "react";
import ConnectedButton from "../components/ConnectedButton";
import "./Index.scss";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Index() {
  const ConnectWallet = () => {
    alert("Arre bhai, yeh Functionality banana baki hai");
  };
  return (
    <div className="index-page">
     <div className="container">
        {/* <ConnectedButton onClick={ConnectWallet} /> */}
        <ConnectButton />
        <a href="/home">Go to Home Page</a>
      </div>
    </div>
  );
}
