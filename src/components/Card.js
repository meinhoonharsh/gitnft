import React, { useRef, useEffect } from "react";

export default function Card({ data, username }) {
  //  Initializing variables
  var defaultImage = "https://connectup.in/assets/defaults/cards/blank.png";
  const {
    name,
    avatar_url,
    bio,
    location,
    followers,
    following,
    public_repos,
    public_gists,
    html_url,
  } = data;

  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    var ctx = canvas.getContext("2d");
    var frame = new Image();
    frame.src = defaultImage;
    frame.onload = function () {
      canvas.width = frame.width;
      canvas.height = frame.height;

      var profileImage = new Image();
      profileImage.src = avatar_url;
      profileImage.onload = function () {
        var profileImageX = 260;
        var profileImageY = 200;
        var profileImageWidth = 275;
        var profileImageHeight = 275;

        ctx.drawImage(profileImage, 260, 200, 275, 275);
        ctx.drawImage(frame, 0, 0);
        ctx.font = "bold 60px 'Rajdhani'";
        ctx.fillStyle = "#0d1117";
        ctx.textAlign = "center";
        ctx.fillText(name, frame.width / 2, 550);

        ctx.font = "bold 40px 'Rajdhani'";
        ctx.fillStyle = "#0d1117";
        ctx.fillText("@" + username, frame.width / 2, 600);
      };
    };
  }, []);

  return (
    <div>
      <div className="canvas-container">
        <canvas ref={canvasRef}></canvas>
        <pre>Data:{JSON.stringify(data, null, 4)}</pre>
      </div>
    </div>
  );
}
