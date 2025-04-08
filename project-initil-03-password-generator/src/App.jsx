import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'
import { Navbar } from './components/Navbar';

function App() {
  const [length,setlength]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [specialAllowed,setSpecialAllowed]=useState(false);
  const [password,setpassword]=useState('PASSWORD');

  const passwordRef=useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    numberAllowed? str+='0123456789':str+'';
    specialAllowed? str+="$%&'/()*+-./:;<=>?@ []^_` {|}~":str+'';

    for(let i=0; i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char);
    }
    setpassword(pass)
  }, [length,numberAllowed,specialAllowed,setpassword])
    
const copyPasswordToClipboard= useCallback(()=>{
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(()=>{passwordGenerator()},[length,passwordGenerator,numberAllowed,specialAllowed])
  return (
    <>
    <Navbar />
    <div className='flex-col mt-28 max-w-2xl mx-auto'>
      <div className='bg-blue-600  p-2 rounded-t-2xl mx-auto'><h1 className="text-3xl font-bold text-center">
      Password Generator
    </h1>
    </div>
    <div className='flex-col content-center mx-auto bg-slate-600 rounded-b-lg'>
      <div className='grid grid-cols-3 mx-1 mt-1 gap-2'>
      <input type='text' value={password} readOnly placeholder="password" className='bg-yellow-50 col-span-2 rounded-md text-orange-500 p-2' ref={passwordRef}></input>
      <button className='col-span-1 bg-orange-400 rounded-lg p-2 ' onClick={copyPasswordToClipboard}>Copy</button>
      </div>
    <div className='flex mt-3 mb-3 mx-auto justify-around'>
    <div className='flex gap-2'>
      <input className='cursor-pointer' type='range' min={6} max={100} name='lengthslider' onChange={(e)=>{setlength(e.target.value)}}/>
      <label for="lengthslider">Lenght: {length}</label>
      </div>
      <div className='flex gap-2'>
      <input type="checkbox" defaultChecked={numberAllowed} name='Numbers' onChange={()=>{setNumberAllowed(!numberAllowed)}}/>
      <label for="Numbers">Numbers</label>
      </div>
      <div className='flex gap-2'>
      <input type="checkbox" defaultChecked={specialAllowed} name='Special' onChange={()=>{setSpecialAllowed(!specialAllowed)}}/>
      <label for="Special">Special Characters</label>
      </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
