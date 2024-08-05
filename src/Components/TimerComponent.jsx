import React, { useEffect, useState } from "react";

export default function TimerComponent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("use");
    const timer = setInterval(() => {
      console.log({ stateBefore: count });
      setCount((prevState) => prevState + 2);
      setCount((prevState) => prevState + 2);
      console.log({ stateAfter: count });
    }, 1000);
    // Cleanup function to clear the interval
    return () => {
      clearInterval(timer);
    };
  }, [count]);
  //   useEffect(() => {
  //     console.log("ss");
  //     const timer = setTimeout(() => {
  //       setCount((prevCount) => prevCount + 1);
  //     }, 1000);
  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }, [count]);
  return (
    <div>
      {count}
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
}
