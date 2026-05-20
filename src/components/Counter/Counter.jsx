import { useRef, useState } from "react";
import "./Counter.css";

function Counter() {
  const [cnt, setCnt] = useState(0);

  const btnRef = useRef();

  function destroy() {
    btnRef.current.innerText = "DESTROYED";
  }

  function increaseCnt() {
    setCnt(cnt + 1);
  }

  function decreaseCnt() {
    if (cnt <= 0) {
      return;
    }
    setCnt(cnt - 1);
  }
  const redText = {
    color: "red",
  };

  return (
    <div className="counter">
      <button type="button" onClick={increaseCnt}>
        increase
      </button>
      <h1 style={cnt <= 0 ? redText : {}} ref={btnRef}>
        COUNT: {cnt < 0 ? 0 : cnt}
      </h1>
      <button type="button" onClick={decreaseCnt}>
        decrease
      </button>
      <button type="button" onClick={destroy}>
        DESTROY
      </button>
    </div>
  );
}

export default Counter;
