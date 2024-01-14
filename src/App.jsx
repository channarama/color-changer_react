import { useState } from 'react'
import './App.css'
function App() {
  const [color, setcolor] = useState("violet")

  return (
    <>                             
<div className="w-full h-screen "
 style={{backgroundColor:color}}>
  <div className="btns co">
  <button className='bg-yellow-100  css'onClick={()=>setcolor("yellow")}>yellow</button>
  <button className='bg-green-200 css'onClick={()=>setcolor("green")}>green</button>
  <button className='bg-blue-200 css'onClick={()=>setcolor("blue")}>blue</button>
  <button className='bg-pink-200 css'onClick={()=>setcolor("pink")}>pink</button>
  <button className='a css'onClick={()=>setcolor("#000")}>black</button>
  <button className='bg-red-100 css'onClick={()=>setcolor("red")}>red</button>
  <button className='bg-violet-100 css'onClick={()=>setcolor("violet")}>violet</button>
</div>
</div>
 </>
  )
}

export default App
