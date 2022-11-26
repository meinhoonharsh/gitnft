import React from "react";
import { useState } from "react";
import Card from "../components/Card";
export default function Test() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState("");

  function search() {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }
  return (
    <div>
      <div className="container">
        <h1>Search for a GitHub User</h1>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <button onClick={search}>Search for User</button>

        {userData && <Card data={userData} username={username} />}
      </div>
    </div>
  );
}
