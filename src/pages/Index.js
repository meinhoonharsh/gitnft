import React from "react";
import ConnectButton from "../components/ConnectButton";
import "./Index.scss";

export default function Index() {
  return (
    <div className="index-page">
      <div className="container">
        <ConnectButton />
        <a href="/home">Go to Home Page</a>
      </div>
    </div>
  );
}
