import React, { useEffect, useState } from "react";
import "./App.css";

const SamplePage = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const handleClick1 = () => setCounter1(counter1 + 1);
  const handleClick2 = () => setCounter2(counter2 + 1);

  useEffect(() =>{
    console.log('inside UseEffect');
},[counter1]);



  return (
    <>
      <button type="button" class="btn btn-primary btn1" onClick={handleClick1}>Click Me1</button>
      <button type="button" class="btn btn-secondary btn2" onClick={handleClick2}>Click Me2</button>
      <div className="div div1">{counter1}</div>
      <div className="div div2">{counter2}</div>
    </>
  );
};

export default SamplePage;
