import { useState } from "react";

function Try() {

   const [count, setCount] = useState(0);
function handleClick() {
    setTimeout(() => {
      console.log(count);
    }, 3000);
  }

  return (
    <button onClick={() => {
       handleClick();
          setCount(count + 1);
     
    }}>
      {count}
        </button>
 )
}

export default Try
