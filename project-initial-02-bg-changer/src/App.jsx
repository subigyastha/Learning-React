import {useState} from "react"

function App() {
const [color,setcolor]=useState("olive");
let a = ['red', 'green', 'orange', 'blue', 'white'];
let first = Math.floor(Math.random() * a.length);
let second = Math.floor(Math.random() * a.length);
let third = Math.floor(Math.random() * a.length);
  return (
    <>
      <div className="w-full h-screen pb-24 flex justify-center items-end" style={{backgroundColor: color}}>
        <div className="absolute top-0 bottom-0 flex justify-start items-start text-9xl pointer-events-none">
        <p style={{color: a[first]}}>I</p>
        <p style={{color: a[second]}}>Love</p>
        <p style={{color: a[third]}}>You</p>
        </div>
        <div className="bg-white border-2 border-black w-fit p-4 rounded-full flex gap-2">
        <button className="w-28 h-28 bg-red-500 shadow-lg border-2 border-black rounded-full" onClick={()=>{setcolor('red')}}></button>
        <button className="w-28 h-28 bg-green-500 shadow-lg border-2 border-black rounded-full" onClick={()=>{setcolor('green')}}></button>
        <button className="w-28 h-28 bg-blue-500 shadow-lg border-2 border-black rounded-full" onClick={()=>{setcolor('blue')}}></button>
        <button className="w-28 h-28 bg-orange-500 shadow-lg border-2 border-black rounded-full" onClick={()=>{setcolor('orange')}}></button>
        <button className="w-28 h-28 bg-white-500 shadow-lg border-2 border-black rounded-full" onClick={()=>{setcolor('white')}}></button>

        </div>
  </div>
    </>
  )
}

export default App
