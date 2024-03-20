// Sandbox.js
import React, { useEffect, useState } from "react";
import Game from "components/Game/Game";
function Sandbox() {
  const [ready, set] = useState(false)


  return (
    <>            <Game/>

    </>
  );
}

export default Sandbox;
