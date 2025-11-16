import { useEffect } from "react";

function First({ count, data }) {
  const handleCounter = () => {
    console.log("Counter called");
  };

  const handleData = () => {
    console.log("handle Data");
    
  }

  useEffect(() => {
    handleCounter();
  },[]);

  useEffect(() => {
    handleData();
  },[data]);

  useEffect(() => {
    return () => {
      console.log('unmount phase only');
      
    }
  })

  return (
    <div className="container">
      <h1>Counter: {count}</h1>
      <h1>Data: {data}</h1>
    </div>
  );
}

export default First;
