import React, { useEffect, useRef, useState } from "react";

function StopWatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(true);

  const timeFormat = () => {
    let hours = Math.floor((time / 60 / 60) % 24);
    let mint = Math.floor((time / 60) % 60);
    let second = Math.floor(time % 60);

    hours = (hours < 10) ? "0" + hours : hours; 
    mint = (mint < 10) ? "0" + mint : mint; 
    second = (second < 10) ? "0" + second : second; 
    return {hours, mint, second}
  };


  const ref = useRef();

  useEffect(()=>{
    if(running){
       ref.current = setInterval(() => {
            setTime((prev)=> prev + 1)
       }, 1000);
       
    }
    return ()=> clearInterval(ref.current)
  }, [running])

  const {hours, mint, second} = timeFormat()

  return (
    <div className="w-full h-[100vh] bg-[#2a322d] flex justify-center items-center">
      <div className="w-[50%] py-[24px] bg-white rounded-[5px] shadow-full text-center">
        <h1 className="text-[48px] font-semibold">{hours?hours:"00"}:{mint?mint:"00"}:{second?second:"00"}</h1>
        <div className="flex items-center justify-center gap-3 my-4">
          <button className="px-[28px] py-[12px] bg-blue-500 text-white rounded-[5px] text-[18px]" onClick={() => setRunning(true)} >
            start
          </button>
          <button className="px-[28px] py-[12px] bg-red-600 text-white rounded-[5px] text-[18px]" onClick={()=> setRunning(false)}>
            Stop
          </button>
          <button className="px-[28px] py-[12px] bg-black text-white rounded-[5px] text-[18px]"
          onClick={()=> {
            setTime(0)
            setRunning(false)
          }}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default StopWatch;
