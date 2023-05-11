import React, { useEffect, useState } from "react";
function Counter() {
  const [data, setData] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setData((x) => x + 1);
    }, 1000);
  }, []);
  function Timeformat(time) {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    return `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;
  }
  return (
    <div>
      <h1>Counter App</h1>
      <p>Coounter:{Timeformat(data)}</p>
    </div>
  );
}
export default Counter;
