import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);

  let now = new Date().toLocaleTimeString();
  now = now.substring(0, 8);

  const [time, setTime] = useState(now);

  function updateTime() {
    let newTime = new Date().toLocaleTimeString();
    newTime = newTime.substring(0, 8);
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      {/* <button onClick={updateTime}>Get Time</button> */}
    </div>
  );
}

export default App;
