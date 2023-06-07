import React, { useState } from "react";

// function Cart() {
//   const [showText, setShowText] = useState(false);

//   const toggleText = () => {
//     setShowText(!showText);
//   };

//   return (
//     <div>
//       <h1>{showText ? "Hello Welcome to AchieversIT" : "Hello Welcome"}</h1>
//       <button onClick={toggleText}>Toggle Text</button>
//     </div>
//   );
// }

function Cart() {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const [count, setCount] = useState(false);

  const login = () => {
    setIsContentVisible(!isContentVisible);
  };

  const logout = () => {
    setCount(!count)
  };

  return (
    <div>
      <button onClick={login}>login</button>
      {isContentVisible && (
        <p>login</p>
      )}

      <button onClick={logout}>logout</button>
      {count && (
        <p>logout</p>
      )}
    </div>
  );
}

export default Cart;