
import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState("")
  const bar = ()=> {}
  return (
    <>
      <div className='zero'>
        <h1>To do:</h1>
        <div className='one'>
          <div className='night'>
            <p className='up-text' >{value}  <button className='span'>X</button></p>
          </div>
          <div className='down'>
            {/* <form> */}
            <input onchange={(e) => setValue(e.target.value)} className='yep' type={"text"}></input>
            <button onClick={()=>bar()} className='add'>Add</button>
            {/* </form> */}
          </div>

        </div>

      </div>
    </>
  );
}

export default App;
