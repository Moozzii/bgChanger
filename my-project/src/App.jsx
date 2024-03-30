import React from "react";
import { useState } from "react";

const red = (e) => {
  e.style.backgroundeColor = "red";
};

const App = () => {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="h-[100vh]" style={{backgroundColor:color}}>
        <div className="card shadow-xl w-[80vw] bg-white h-16 rounded-xl mx-auto my-5 flex ">
          <div className="container flex text-2xl my-4">
            <button onClick={()=> setColor("white")}  className="color cursor-pointer hover:px-5 transition-all  mx-20 px-4  rounded-xl bg-white">
              White
            </button >
            <button onClick={()=> setColor("yellow")}  className="color cursor-pointer hover:px-5 transition-all mx-20 text-white px-4  rounded-xl bg-yellow-400">
              Yellow
            </button >
            <button onClick={()=> setColor("black")}  className="color cursor-pointer hover:px-5 transition-all mx-20 text-white px-4  rounded-xl bg-black ">
              Black
            </button >
            <button onClick={()=> setColor("pink")}  className="color cursor-pointer hover:px-5 transition-all mx-20 text-white px-4  rounded-xl  bg-pink-900">
              Pink
            </button >
            <button onClick={()=> setColor("red")} 
              className="color cursor-pointer hover:px-5 transition-all mx-20 text-white px-4  rounded-xl bg-red-900 "
            >
              Red
            </button >
            <button onClick={()=> setColor("blue")}  className="color cursor-pointer hover:px-5 transition-all mx-20 text-white px-4  rounded-xl bg-blue-900 ">
              Blue
            </button >
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
